import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, Eye, EyeOff, ArrowRight, Mail, Lock, User, Phone } from 'lucide-react';
import { useStore } from '@/stores/useStore';
import { toast } from 'sonner';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useStore();
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      login({
        name: isRegister ? form.name : 'Eco Warrior',
        email: isRegister ? form.email : form.email || 'user@ecoloop.in',
        phone: isRegister ? form.phone : '+91 98765 43210',
        avatar: '',
      });
      setIsSubmitting(false);
      toast.success(isRegister ? 'Account created successfully!' : 'Welcome back!');
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a201d] flex">
      {/* Left Side - Visual */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/hero_banner.jpg"
            alt="Eco Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a201d]/90 via-[#0a201d]/60 to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col justify-between p-12">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#83f0c7] to-[#1d4c43] flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-[#fffefa]">
              ECO<span className="text-[#83f0c7]">LOOP</span>
            </span>
          </Link>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#fffefa] leading-tight">
              Join the<br />
              <span className="text-gradient">Sustainable</span><br />
              Fashion Movement
            </h2>
            <p className="text-white/60 max-w-md">
              Create eco-friendly custom t-shirts with AI-powered design tools. Every purchase plants a tree and reduces your carbon footprint.
            </p>
            <div className="flex items-center gap-6">
              <div>
                <p className="text-2xl font-bold text-[#83f0c7]">50K+</p>
                <p className="text-xs text-white/50">Trees Planted</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#83f0c7]">20+</p>
                <p className="text-xs text-white/50">Eco Designs</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#83f0c7]">100%</p>
                <p className="text-xs text-white/50">Organic</p>
              </div>
            </div>
          </div>

          <p className="text-xs text-white/40">
            &copy; 2026 ECOLOOP. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <Link to="/" className="flex items-center gap-2 lg:hidden mb-8">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#83f0c7] to-[#1d4c43] flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-[#fffefa]">
              ECO<span className="text-[#83f0c7]">LOOP</span>
            </span>
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#fffefa] mb-2">
              {isRegister ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="text-sm text-white/50">
              {isRegister
                ? 'Join our community of eco-conscious creators'
                : 'Sign in to your ECOLOOP account'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegister && (
              <>
                <div>
                  <label className="block text-xs text-white/60 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full h-12 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-sm text-[#fffefa] placeholder:text-white/30 focus:outline-none focus:border-[#83f0c7]/50 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/60 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full h-12 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-sm text-[#fffefa] placeholder:text-white/30 focus:outline-none focus:border-[#83f0c7]/50 transition-colors"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-xs text-white/60 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full h-12 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-sm text-[#fffefa] placeholder:text-white/30 focus:outline-none focus:border-[#83f0c7]/50 transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-white/60 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="Enter your password"
                  className="w-full h-12 pl-10 pr-12 bg-white/5 border border-white/10 rounded-xl text-sm text-[#fffefa] placeholder:text-white/30 focus:outline-none focus:border-[#83f0c7]/50 transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {!isRegister && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/5 accent-[#1d4c43]" />
                  <span className="text-xs text-white/50">Remember me</span>
                </label>
                <button type="button" className="text-xs text-[#83f0c7] hover:underline">
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-[#1d4c43] text-white rounded-xl font-medium hover:bg-[#2a6b5e] transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-[0.98]"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {isRegister ? 'Create Account' : 'Sign In'}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-white/50">
              {isRegister ? 'Already have an account?' : "Don't have an account?"}
              <button
                onClick={() => setIsRegister(!isRegister)}
                className="ml-1 text-[#83f0c7] font-medium hover:underline"
              >
                {isRegister ? 'Sign In' : 'Create Account'}
              </button>
            </p>
          </div>

          {/* Demo Login */}
          {!isRegister && (
            <button
              onClick={() => {
                login({
                  name: 'Demo User',
                  email: 'demo@ecoloop.in',
                  phone: '+91 98765 43210',
                  avatar: '',
                });
                toast.success('Logged in as Demo User');
                navigate('/dashboard');
              }}
              className="w-full mt-4 py-3 border border-dashed border-white/20 rounded-xl text-sm text-white/50 hover:text-[#83f0c7] hover:border-[#83f0c7]/30 transition-all"
            >
              Quick Demo Login (No signup required)
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
