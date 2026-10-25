/**
 * LK Educations centralized contact configuration and helper functions.
 */

export const CONTACT_INFO = {
  primaryPhone: '+91 94431 54224',
  secondaryPhone: '+91 98421 54224',
  primaryTel: '+919443154224',
  secondaryTel: '+919842154224',
  whatsappNumber: '919443154224',
  email: 'lkeduganesh@gmail.com',
  address: '182, S. N. High Road, Sripuram, Tirunelveli Junction, Tirunelveli 627001, Tamil Nadu',
  landmark: 'Opposite Junction Bus Stand Arch / Near Post Office',
  hours: 'Mon to Sat: 10:00 AM - 7:00 PM',
};

/**
 * Returns WhatsApp click-to-chat URL with a prefilled message.
 */
export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = 'Hi LK Educations, I would like to talk to your team regarding courses and admissions.';
  const text = message ? message.trim() : defaultMsg;
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Direct redirect to WhatsApp for enrolling in a specific program.
 * Requirement: "maintain whatsapp in all the programs like if a person clicks enroll now it should redirect to the whatsapp"
 */
export function openEnrollWhatsApp(programTitle: string): void {
  const message = `Hi LK Educations, I want to enroll in "${programTitle}". Please share batch timings, syllabus, and enrollment details.`;
  const url = getWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Direct redirect to WhatsApp for general inquiry or talk to team.
 */
export function openGeneralWhatsApp(customMessage?: string): void {
  const url = getWhatsAppUrl(customMessage);
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Triggers a phone call to the admissions desk.
 */
export function triggerPhoneCall(phone = CONTACT_INFO.primaryTel): void {
  window.location.href = `tel:${phone}`;
}
