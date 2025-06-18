

function Logout() {
    // Clear user data from localStorage
    localStorage.removeItem("userData");

    // Redirect to login
    window.location.href ="login";

  return (
    <div className="text-center mt-10 text-xl font-semibold">
      Logging out...
    </div>
  );
}

export default Logout;
