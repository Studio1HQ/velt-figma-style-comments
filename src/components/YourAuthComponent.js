//Warning: Make sure this is a child component to VeltProvider
//and not within the same file where VeltProvider is placed.

// 1) Import the useIdentify hook
import { useIdentify } from "@veltdev/react";

export default function YourAuthComponent() {
  const userService = () => {
    return {
      uid: "123",
      organizationId: "organizationId123", // this is the organization id the user belongs to. You should always use this.
      displayName: "Syket",
      email: "syket@gmail.com",
      photoURL: "https://i.pravatar.cc/300",
      color: "#ee00ff", // Use valid Hex code value. Used in the background color of the user's avatar.
      textColor: "#ee00ff", // Use valid Hex code value. Used in the text color of the user's intial when photoUrl is not present.
    };
  };

  let yourAuthenticatedUser = userService();

  // 2) Fetch the relevant User info from yourAuthenticatedUser
  const { uid, displayName, email, photoURL, organizationId } =
    yourAuthenticatedUser;

  // Create the Velt user object
  const user = {
    userId: uid,
    organizationId: organizationId, // this is the organization id the user belongs to. You should always use this.
    name: displayName,
    email: email,
    photoUrl: photoURL,
    color: "#ee00ff", // Use valid Hex code value. Used in the background color of the user's avatar.
    textColor: "#ee00ff", // Use valid Hex code value. Used in the text color of the user's intial when photoUrl is not present.
  };

  //3) Pass the user object to the SDK
  useIdentify(user);

  return <div></div>;
}
