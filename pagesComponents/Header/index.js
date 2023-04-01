import {
	NovuProvider,
	PopoverNotificationCenter,
	NotificationBell,
	IMessage,
} from '@novu/notification-center';

export function Header() {
	function onNotificationClick(message) {
		// your logic to handle the notification click
		if (message?.cta?.data?.url) {
			window.location.href = message.cta.data.url;
		}
	}

	return (
		<NovuProvider subscriberId={'641288feadaf6acd34db3a15'} applicationIdentifier={'MQpLR48yKd2B'}>
			<PopoverNotificationCenter onNotificationClick={onNotificationClick}>
				{({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
			</PopoverNotificationCenter>
		</NovuProvider>
	);
}