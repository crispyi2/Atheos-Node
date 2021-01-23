The project class has a function called santize path, needs looking into.

CleanUsername in user class?
Sanitize Path in project class?

Copy Replace Licenses
Copy Replace Common::Send
Change echos to new format and move into global

		Common::send("error", "Invalid path.");
		Common::send("error", "Invalid action.");
		Common::send("success");

	Common::send("error", "User does not have access.");


			"S2000" => "Success.",

			"E401i" => "Invalid Action.",
			"E401m" => "Missing Action.",

			"E402i" => "Invalid Path.",
			"E402m" => "Missing Path.",

			"E403g" => "Invalid Parameter.",
			"E403i" => "Invalid Parameter:",
			"E403m" => "Missing Parameter.",

			"E404g" => "No Content.",

			"E430u" => "User does not have access.",
			"E430c" => "Client does not have access.",
			"E430a" => "Atheos does not have access.",

			"W490g" => "Conflict.",
			"W490s" => "Conflict:",

			"E5000" => "Internal Error.",
			"E5001" => "Internal Error:",
			"E5002" => "Failed to save content.",
			
