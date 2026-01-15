# Resend Domain Verification Guide

## Why You Need to Verify a Domain

The `onboarding@resend.dev` email can only send to the email address associated with your Resend account. To send emails to other recipients (like `fpaloma.buisness@gmail.com`), you need to verify your own domain.

## Steps to Verify Your Domain in Resend

1. **Go to Resend Dashboard**
   - Visit https://resend.com/domains
   - Log in to your Resend account

2. **Add Your Domain**
   - Click "Add Domain"
   - Enter your domain name (e.g., `yourdomain.com` or `ferdinandpaloma.com`)
   - Click "Add"

3. **Verify Your Domain**
   - Resend will provide DNS records you need to add
   - You'll typically need to add:
     - **TXT record** for domain verification
     - **MX records** (if you want to receive emails)
     - **SPF record** (for email authentication)
     - **DKIM records** (for email security)

4. **Add DNS Records**
   - Go to your domain registrar (where you bought the domain)
   - Or go to your DNS provider (Cloudflare, Namecheap, GoDaddy, etc.)
   - Add the DNS records Resend provides
   - Wait 5-60 minutes for DNS propagation

5. **Verify Domain Status**
   - Go back to Resend dashboard
   - Your domain should show as "Verified" once DNS records are detected

6. **Update Your `.env.local` File**
   ```env
   RESEND_FROM_EMAIL=contact@yourdomain.com
   ```
   Replace `yourdomain.com` with your verified domain.

## Alternative: Use Your Resend Account Email

If you just want to test quickly and your Resend account email is different:
- Change `CONTACT_EMAIL` in `.env.local` to match your Resend account email
- You can still receive the contact form submissions there

## Need Help?

- Resend Domain Verification Guide: https://resend.com/docs/dashboard/domains/introduction
- Resend Support: support@resend.com
