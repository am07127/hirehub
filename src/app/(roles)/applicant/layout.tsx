export default function ApplicantLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Add Applicant-specific navigation/layout here */}
        {children}
      </div>
    );
  }