import emailjs from '@emailjs/browser';

// CONFIGURATION
// 1. Create an account at https://www.emailjs.com/
// 2. Create a generic "Email Service" (connects to your Gmail)
// 3. Create an "Email Template" (defines how the email looks)
// 4. Paste your IDs below:
const EMAILJS_SERVICE_ID = 'service_zqixylg';
const EMAILJS_TEMPLATE_ID = 'template_cj4un2m';
const EMAILJS_PUBLIC_KEY = 'XiFcCklJi7g88Ibdj';

interface ContactData {
  name: string;
  email: string;
  message: string;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export const api = {
  contact: {
    sendMessage: async (data: ContactData): Promise<ApiResponse<null>> => {
      // Basic Validation
      if (!data.email.includes('@') || !data.name || !data.message) {
        throw new Error('Please fill in all fields correctly.');
      }

      try {
        const response = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: data.name,
            from_email: data.email,
            message: data.message,
            to_name: "Nithish V J", // Your name
          },
          EMAILJS_PUBLIC_KEY
        );

        if (response.status === 200) {
          return { success: true, message: 'Message sent successfully!' };
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        console.error("EmailJS Error:", error);
        throw new Error('Failed to send message. Please try again.');
      }
    }
  },

  resume: {
    download: async (): Promise<void> => {
      // FIX: Use import.meta.env.BASE_URL to handle GitHub Pages subpaths correctly.
      // This ensures we look for /MyPortfolio/resume.pdf in production, and /resume.pdf in dev.
      const baseUrl = import.meta.env.BASE_URL;
      const resumeUrl = `${baseUrl}resume.pdf`;
      
      try {
        // Check if file exists (optional, but good for debugging)
        const response = await fetch(resumeUrl);
        if (response.status === 404) {
          alert("Resume file not found! Please ensure 'resume.pdf' is inside the 'public' folder.");
          return;
        }

        // Trigger download
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Nithish_VJ_Resume.pdf'; // The name the user sees when downloading
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Download error:", error);
        // Fallback: Just open in new tab if programmatic fetch fails
        window.open(resumeUrl, '_blank');
      }
    }
  }
};