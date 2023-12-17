import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

export default function Profile() {
	const { user, isAuthenticated, isLoading } = useAuth0();
	console.log(user);
	if (isLoading) {
		return <div>Loading ...</div>;
	}

	return isAuthenticated ? (
		<div className="profile">
			<img src={user.picture} alt={user.name} />
			<div>
				<h2>{user.name}</h2>
				<p>{user.email}</p>
				<LogoutButton />
			</div>
		</div>
	) : (
		<LoginButton />
	);
}
