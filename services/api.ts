import emailjs from '@emailjs/browser';

// CONFIGURATION
// ------------------------------------------------------------------
// IMPORTANT: Ensure these match your EmailJS Dashboard exactly.
// 1. Service ID: Found in "Email Services" tab.
// 2. Template ID: Found in "Email Templates" tab (or in the URL when editing a template).
// 3. Public Key: Found in "Account" (click your avatar) -> "API Keys" -> "Public Key".
// ------------------------------------------------------------------

const EMAILJS_SERVICE_ID = 'service_zqixylg'.trim();
const EMAILJS_TEMPLATE_ID = 'template_pka7mqp'.trim(); // <--- DOUBLE CHECK THIS ID IN YOUR DASHBOARD
const EMAILJS_PUBLIC_KEY = 'XiFcCklJi7g88Ibdj'.trim();

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
        const templateParams = {
          // Variables matching your screenshot configuration
          name: data.name,
          email: data.email,
          message: data.message,
          
          // Extra variables often required by templates
          from_name: data.name,
          from_email: data.email,
          to_name: "Nithish V J",
          reply_to: data.email,
        };

        console.log("Sending email...", { service: EMAILJS_SERVICE_ID, template: EMAILJS_TEMPLATE_ID, params: templateParams });

        const response = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );

        if (response.status === 200) {
          return { success: true, message: 'Message sent successfully!' };
        } else {
          throw new Error(`EmailJS Status: ${response.status} - ${response.text}`);
        }
      } catch (error: any) {
        console.error("EmailJS Error:", error);

        // Specific handling for the "Template ID not found" error
        if (error?.text?.includes("template ID not found")) {
          const msg = `Configuration Error: Template ID '${EMAILJS_TEMPLATE_ID}' was not found. Please check your EmailJS Dashboard and update services/api.ts`;
          alert(msg); // Alert the user directly
          throw new Error(msg);
        }

        const errorText = error?.text || error?.message || "Unknown error";
        throw new Error(`Failed to send message: ${errorText}`);
      }
    }
  },

  resume: {
    download: async (): Promise<void> => {
      const baseUrl = import.meta.env.BASE_URL;
      const resumeUrl = `${baseUrl}resume.pdf`;
      
      try {
        const response = await fetch(resumeUrl);
        if (response.status === 404) {
          alert("Resume file not found! Please ensure 'resume.pdf' is inside the 'public' folder.");
          return;
        }

        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Nithish_VJ_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Download error:", error);
        window.open(resumeUrl, '_blank');
      }
    }
  }
};