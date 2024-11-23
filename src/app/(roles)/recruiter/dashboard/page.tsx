"use client";

import React from 'react';
import { MoreVertical, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { AppSidebar } from '@/components/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
  // Sample data for the statistics
  const stats = [
    { label: 'In Review', value: '10,000', period: 'June 2023' },
    { label: 'Selected List', value: '800', period: 'June 2023' },
    { label: 'Accepted', value: '100', period: 'June 2023' },
    { label: 'Offering Stage', value: '100', period: 'June 2023' },
  ];

  // Sample data for the chart
  const chartData = [
    { name: 'Jan', selected: 62, rejected: 85 },
    { name: 'Feb', selected: 65, rejected: 52 },
    { name: 'Mar', selected: 42, rejected: 55 },
    { name: 'Apr', selected: 78, rejected: 90 },
    { name: 'Mei', selected: 70, rejected: 82 },
    { name: 'Jun', selected: 72, rejected: 45 },
  ];

  // Sample data for recent jobs
  const recentJobs = [
    { title: 'UI/UX Designer', type: 'Full Time', timeLeft: '27 days remaining', status: 'Active', applications: '798 Applications' },
    { title: 'Senior UX Designer', type: 'Full Time', timeLeft: '15 days remaining', status: 'Active', applications: '185 Applications' },
  ];

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <AppSidebar />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.label}
                  </CardTitle>
                  <Button variant="ghost" size="icon" className="h-4 w-4">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {stat.period}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Applicant Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart width={700} height={300} data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="selected" stroke="#3b82f6" name="Selected" />
                  <Line type="monotone" dataKey="rejected" stroke="#60a5fa" name="Rejected" />
                </LineChart>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Demographics</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                {/* Add your demographics pie chart here */}
              </CardContent>
            </Card>
          </div>

          {/* Recent Jobs Table */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recently Posted Jobs</CardTitle>
              <Button variant="ghost">View all</Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>JOBS</TableHead>
                    <TableHead>STATUS</TableHead>
                    <TableHead>APPLICATIONS</TableHead>
                    <TableHead>ACTIONS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentJobs.map((job, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{job.title}</div>
                          <div className="text-sm text-muted-foreground">
                            {job.type} • {job.timeLeft}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-700">
                          {job.status}
                        </span>
                      </TableCell>
                      <TableCell>{job.applications}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="outline">View Applications</Button>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;