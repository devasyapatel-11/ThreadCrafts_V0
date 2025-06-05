import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, TorusKnot } from '@react-three/drei';
import AppLogo from '@/components/AppLogo';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';

const AnimatedTorus = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <torusKnotGeometry args={[1.2, 0.4, 128, 32]} />
      <meshPhysicalMaterial
        color="#6EE7B7"
        roughness={0.2}
        metalness={0.7}
        clearcoat={1}
        clearcoatRoughness={0.1}
        transmission={0.7}
        thickness={0.5}
      />
    </mesh>
  );
};

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const { signUp } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await signUp(email, password);
      setSuccess('Signup successful! Please check your email to verify your account.');
      setTimeout(() => router.push('/login'), 2000);
    } catch (err: any) {
      setError(err.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex h-screen justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <AnimatedTorus />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>
      {/* Foreground Card */}
      <div className="flex flex-col gap-5 h-auto z-10 w-full items-center">
        <div className="w-full flex justify-center cursor-pointer">
          <AppLogo />
        </div>
        <div className="w-full md:w-[400px] rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-8 flex flex-col items-center"
             style={{
               boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
               border: '1px solid rgba(255, 255, 255, 0.18)'
             }}>
          <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Sign Up</h2>
          <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="peer w-full rounded-lg bg-white/20 px-4 pt-6 pb-2 text-white placeholder-transparent outline-none border border-white/30 focus:border-emerald-400 transition-all duration-200 shadow-md focus:shadow-emerald-500/30"
                placeholder="Email"
                autoComplete="email"
                required
                disabled={loading}
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-2 text-white/70 text-sm pointer-events-none transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-white/70"
              >
                Email
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="peer w-full rounded-lg bg-white/20 px-4 pt-6 pb-2 text-white placeholder-transparent outline-none border border-white/30 focus:border-emerald-400 transition-all duration-200 shadow-md focus:shadow-emerald-500/30"
                placeholder="Password"
                autoComplete="new-password"
                required
                disabled={loading}
              />
              <label
                htmlFor="password"
                className="absolute left-4 top-2 text-white/70 text-sm pointer-events-none transition-all duration-200 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-white/70"
              >
                Password
              </label>
            </div>
            {error && <div className="text-red-400 text-sm text-center">{error}</div>}
            {success && <div className="text-green-400 text-sm text-center">{success}</div>}
            <button
              type="submit"
              className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-600 text-white font-bold text-lg shadow-lg transform transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 disabled:opacity-60"
              style={{ boxShadow: '0 4px 24px 0 rgba(80, 255, 180, 0.25)' }}
              disabled={loading}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
