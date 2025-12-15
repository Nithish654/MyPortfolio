import emailjs from '@emailjs/browser';

// CONFIGURATION
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
        const templateParams = {
          // Variables for Template Content & Subject
          name: data.name,
          email: data.email,
          message: data.message,
          from_name: data.name,
          from_email: data.email,
          
          // Variables for "Reply To" and defaults
          to_name: "Nithish V J",
          reply_to: data.email,
        };

        // Log params to verify data before sending
        console.log("Attempting to send email with params:", templateParams);

        const response = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );

        console.log("EmailJS Success:", response);

        if (response.status === 200) {
          return { success: true, message: 'Message sent successfully!' };
        } else {
          // If status is not 200, treat as error
          throw new Error(`EmailJS Status: ${response.status} - ${response.text}`);
        }
      } catch (error: any) {
        // Detailed Error Logging
        console.error("EmailJS Error Details:", error);
        
        // Extract meaningful error text if available
        const errorText = error?.text || error?.message || JSON.stringify(error);
        
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