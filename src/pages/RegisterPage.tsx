import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import logo from '@/assets/logo.png';

const registerSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

type RegisterForm = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    console.log('Register:', data);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="spa-section">
        <div className="spa-container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-sm mx-auto"
          >
            <div className="text-center mb-8">
              <img src={logo} alt="Hannah HeadSpa" className="h-16 w-16 mx-auto mb-4" />
              <h1 className="text-2xl font-semibold text-foreground">Create Account</h1>
              <p className="text-sm text-muted-foreground mt-1">Join Hannah HeadSpa and Massage</p>
            </div>

            <div className="bg-card rounded-2xl p-6 spa-card-shadow">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" {...register('firstName')} className="mt-1.5 rounded-lg bg-secondary border-transparent focus:border-primary" />
                    {errors.firstName && <p className="text-destructive text-xs mt-1">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" {...register('lastName')} className="mt-1.5 rounded-lg bg-secondary border-transparent focus:border-primary" />
                    {errors.lastName && <p className="text-destructive text-xs mt-1">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...register('email')} className="mt-1.5 rounded-lg bg-secondary border-transparent focus:border-primary" placeholder="you@example.com" />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" {...register('password')} className="mt-1.5 rounded-lg bg-secondary border-transparent focus:border-primary" placeholder="••••••••" />
                  {errors.password && <p className="text-destructive text-xs mt-1">{errors.password.message}</p>}
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" {...register('confirmPassword')} className="mt-1.5 rounded-lg bg-secondary border-transparent focus:border-primary" placeholder="••••••••" />
                  {errors.confirmPassword && <p className="text-destructive text-xs mt-1">{errors.confirmPassword.message}</p>}
                </div>

                <Button type="submit" className="w-full rounded-full h-11" disabled={isLoading}>
                  {isLoading ? 'Creating...' : 'Create Account'}
                </Button>
              </form>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account?{' '}
              <Link to="/login" className="text-primary font-medium hover:underline">
                Sign in
              </Link>
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
