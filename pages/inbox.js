import DashboardLayout from "../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../examples/Navbars/DashboardNavbar";
import InboxSection from "../owner-dashboard-components/InboxSection";

function Inbox() {
	return (
		<DashboardLayout>
			<DashboardNavbar/>
			<InboxSection/>
		</DashboardLayout>
	);
}

export default Inbox;