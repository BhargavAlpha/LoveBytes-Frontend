import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

const AnalyticsDashboard = () => {
    // Dummy data for KPIs related to love messages and quotes
    const userEngagementData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'User Engagement (Likes & Comments)',
                data: [50, 75, 60, 90], // Engagement metrics for the month
                fill: false,
                borderColor: '#ff6b6b',
                backgroundColor: '#ff6b6b',
                tension: 0.1
            }
        ]
    };

    const contentPopularityData = {
        labels: ['Love Message 1', 'Love Message 2', 'Quote 1', 'Quote 2', 'Anniversary Message'],
        datasets: [
            {
                label: 'Content Popularity (Views)',
                data: [120, 180, 150, 200, 170], // Views for different content
                backgroundColor: ['#ff6b6b', '#6bc1ff', '#ffcc6b', '#6bff9b', '#cc6bff'],
                borderColor: '#fff',
                borderWidth: 2
            }
        ]
    };

    const sharingStatisticsData = {
        labels: ['Shared on Facebook', 'Shared on Twitter', 'Shared via Email'],
        datasets: [
            {
                label: 'Sharing Statistics',
                data: [70, 50, 30], // Number of shares per platform
                backgroundColor: ['#4267B2', '#1DA1F2', '#FFDD44'],
                borderWidth: 1
            }
        ]
    };

    const userRetentionData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'User Retention (%)',
                data: [90, 85, 80, 88], // User retention rates over time
                backgroundColor: '#6bff9b',
                borderColor: '#3bbf6d',
                borderWidth: 1
            }
        ]
    };

    return (
        <div style={{ width: '90%', margin: '20px auto', maxWidth: '1200px' }}>
            <h2>Data Analytics Dashboard</h2>
            
            <div style={{ marginBottom: '30px' }}>
                <h3>User Engagement Metrics</h3>
                <Line data={userEngagementData} options={{ responsive: true, plugins: { legend: { display: true } } }} />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h3>Content Popularity</h3>
                <Bar data={contentPopularityData} options={{ responsive: true, plugins: { legend: { display: true } } }} />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h3>Sharing Statistics</h3>
                <Pie data={sharingStatisticsData} options={{ responsive: true, plugins: { legend: { display: true } } }} />
            </div>

            <div>
                <h3>User Retention Rates</h3>
                <Bar data={userRetentionData} options={{ responsive: true, plugins: { legend: { display: true } } }} />
            </div>
        </div>
    );
};

export default AnalyticsDashboard;
