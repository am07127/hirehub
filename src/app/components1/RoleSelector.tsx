'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Building2, User } from 'lucide-react';

export default function RoleSelector() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const router = useRouter();

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);

    // Navigate to the respective login page for each role
    router.push(`${role.toLowerCase()}/login`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl w-full px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Welcome to HireHub
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Choose how you'd like to use HireHub
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Recruiter Card */}
          <button
            onClick={() => handleRoleSelect('recruiter')}
            className={`group p-8 rounded-xl shadow-lg transition-all duration-200 
              ${
                selectedRole === 'recruiter'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700'
              } flex flex-col items-center space-y-4`}
          >
            <Building2 size={48} className="group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold">I'm a Recruiter</h2>
            <p className="text-center text-sm opacity-80">
              Post jobs, screen candidates, and manage your hiring pipeline
            </p>
            <ArrowRight className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* Applicant Card */}
          <button
            onClick={() => handleRoleSelect('applicant')}
            className={`group p-8 rounded-xl shadow-lg transition-all duration-200 
              ${
                selectedRole === 'applicant'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700'
              } flex flex-col items-center space-y-4`}
          >
            <User size={48} className="group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold">I'm an Applicant</h2>
            <p className="text-center text-sm opacity-80">
              Find jobs, submit applications, and track your progress
            </p>
            <ArrowRight className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </div>
  );
}
