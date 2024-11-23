



export default function RecruiterLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Add Recruiter-specific navigation/layout here */}
        {children}
      </div>
    );
  }