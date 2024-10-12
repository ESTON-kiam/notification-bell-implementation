
        // Sample notification data (this should be fetched from your backend)
        let notifications = {
            newAppointments: 3,
            newOrders: 2,
            newMessages: 1,
            newSubscribers: 5,
        };

        // Function to update notification count and dropdown
        function updateNotificationCount() {
            const totalNotifications = notifications.newAppointments + notifications.newOrders + notifications.newMessages + notifications.newSubscribers;
            document.getElementById('notificationCount').innerText = totalNotifications;

            // Populate the notification dropdown
            const notificationList = document.getElementById('notificationList');
            notificationList.innerHTML = ''; // Clear existing notifications
            if (totalNotifications > 0) {
                notificationList.innerHTML += `<li>${notifications.newAppointments} new appointments</li>`;
                notificationList.innerHTML += `<li>${notifications.newOrders} new orders</li>`;
                notificationList.innerHTML += `<li>${notifications.newMessages} new messages</li>`;
                notificationList.innerHTML += `<li>${notifications.newSubscribers} new subscribers</li>`;
            } else {
                notificationList.innerHTML = '<li>No new notifications</li>';
            }
        }

        // Function to toggle the display of notifications
        function toggleNotifications() {
            const dropdown = document.getElementById('notificationDropdown');
            dropdown.style.display = dropdown.style.display === 'none' || dropdown.style.display === '' ? 'block' : 'none';
        }

        // Initial update of notification count
        updateNotificationCount();

        // Close the dropdown if the user clicks outside of it
        window.onclick = function(event) {
            if (!event.target.matches('.notification-bell')) {
                document.getElementById('notificationDropdown').style.display = 'none';
            }
        }
