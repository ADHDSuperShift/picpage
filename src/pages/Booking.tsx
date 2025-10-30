import React, { useMemo, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { AppProvider } from '@/contexts/AppContext';
import Navbar from '@/components/Navbar';
import QRCode from '@/components/QRCode';
import Footer from '@/components/Footer';
import { mockSalons } from '@/data/mockSalons';
import { Calendar } from '@/components/ui/calendar';
import { addDays, format, parseISO } from 'date-fns';

const Booking: React.FC = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('service');
  const salon = mockSalons.find(s => s.id === id);
  const service = salon?.services.find(s => s.id === serviceId);
  
  const [step, setStep] = useState(1);

  const availability = useMemo<Record<string, string[]>>(() => {
    const weekdaySlots = ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"];
    const weekendSlots = ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"];
    const schedule: Record<string, string[]> = {};
    const today = new Date();

    for (let offset = 0; offset < 14; offset++) {
      const current = addDays(today, offset);
      const key = format(current, "yyyy-MM-dd");

      if (current.getDay() === 0) {
        schedule[key] = [];
        continue;
      }

      const slots = current.getDay() === 6 ? weekendSlots : weekdaySlots;
      const trimmed = slots.filter((_, index) => !((offset + index) % 4 === 0));
      schedule[key] = trimmed;
    }

    return schedule;
  }, []);

  const firstAvailable = useMemo(() => {
    return Object.entries(availability).find(([, slots]) => slots.length > 0);
  }, [availability]);

  const [selectedDate, setSelectedDate] = useState<string | null>(firstAvailable?.[0] ?? null);
  const [selectedTime, setSelectedTime] = useState<string>(firstAvailable?.[1]?.[0] ?? '');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: firstAvailable?.[0] ?? '',
    time: firstAvailable?.[1]?.[0] ?? ''
  });
  const [bookingId, setBookingId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBookingId = `BK${Date.now()}`;
    setBookingId(newBookingId);
    setStep(2);
  };

  if (!salon || !service) return <div>Not found</div>;

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    const key = format(date, "yyyy-MM-dd");
    setSelectedDate(key);

    const todaysSlots = availability[key] ?? [];
    const firstSlot = todaysSlots[0] ?? '';
    setSelectedTime(firstSlot);
    setFormData((prev) => ({
      ...prev,
      date: key,
      time: firstSlot,
    }));
  };

  const handleTimeSelect = (slot: string) => {
    setSelectedTime(slot);
    setFormData((prev) => ({
      ...prev,
      time: slot,
    }));
  };

  const slotsForSelectedDate = selectedDate ? availability[selectedDate] ?? [] : [];

  return (
    <AppProvider>
  <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="bg-[#1E1E1E] text-white py-8 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold">
              <span className="text-[#D4AF37]">Book</span> Appointment
            </h1>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 py-8">
          {step === 1 ? (
            <div className="bg-[#1F1F1F] rounded-xl p-6 shadow-lg border border-white/10 text-gray-100">
              <h2 className="text-2xl font-bold text-white mb-6">{service.name}</h2>
              <div className="grid gap-6 lg:grid-cols-[1.3fr,1fr] mb-6">
                <div className="bg-[#141414] border border-white/10 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-white mb-3">Choose a date</h3>
                  <Calendar
                    mode="single"
                    selected={selectedDate ? parseISO(selectedDate) : undefined}
                    onSelect={handleDateSelect}
                    disabled={(date) => {
                      const key = format(date, "yyyy-MM-dd");
                      return !(availability[key] && availability[key].length > 0);
                    }}
                    className="rounded-md bg-transparent text-white"
                  />
                  <p className="text-sm text-gray-400 mt-3">
                    {selectedDate
                      ? `Selected: ${format(parseISO(selectedDate), "EEEE, MMMM d")}`
                      : "Select a date to see available slots."}
                  </p>
                </div>
                <div className="bg-[#141414] border border-white/10 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-white mb-3">Available time slots</h3>
                  {selectedDate ? (
                    slotsForSelectedDate.length > 0 ? (
                      <div className="grid grid-cols-2 gap-2">
                        {slotsForSelectedDate.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => handleTimeSelect(slot)}
                            className={`px-3 py-2 rounded-lg border transition-colors text-sm font-semibold ${
                              selectedTime === slot
                                ? 'bg-[#C81D25] border-[#C81D25]/60 text-white'
                                : 'bg-[#1F1F1F] border-white/10 text-gray-100 hover:border-[#D4AF37]/60 hover:text-white'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-400">
                        Fully booked. Please choose another date.
                      </p>
                    )
                  ) : (
                    <p className="text-sm text-gray-400">
                      Pick a date to view available appointments.
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-4">
                    Time slots update automatically when you select a different day.
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#141414] text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#141414] text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#141414] text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
                <button
                  type="submit"
                  disabled={!formData.date || !formData.time}
                  className="w-full bg-[#C81D25] text-white py-3 rounded-lg font-semibold hover:bg-[#D4AF37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-[#1F1F1F] rounded-xl p-8 shadow-lg text-center border border-white/10 text-gray-100">
              <h2 className="text-3xl font-bold text-[#D4AF37] mb-6">Booking Confirmed!</h2>
              <div className="mb-6">
                <QRCode value={`BOOKING:${bookingId}|SALON:${salon.id}|DATE:${formData.date}|TIME:${formData.time}`} />
              </div>
              <div className="text-left bg-[#1B1B1B] border border-white/10 p-4 rounded-lg mb-6 text-gray-200">
                <p className="mb-2"><strong>Salon:</strong> {salon.name}</p>
                <p className="mb-2"><strong>Service:</strong> {service.name}</p>
                <p className="mb-2">
                  <strong>Date:</strong>{" "}
                  {formData.date ? format(parseISO(formData.date), "EEEE, MMMM d") : "—"}
                </p>
                <p className="mb-2"><strong>Time:</strong> {formData.time || "—"}</p>
                <p><strong>Booking ID:</strong> {bookingId}</p>
              </div>
              <button className="bg-[#C81D25] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D4AF37] transition-colors">
                Save QR Code
              </button>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </AppProvider>
  );
};

export default Booking;
