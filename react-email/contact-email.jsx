import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Hr,
  Link,
  Img,
} from '@react-email/components';

const ContactEmail = ({ name = 'Visitor', email = '', message = '' }) => (
  <Html>
    <Head />
    <Preview>New portfolio message from {name}</Preview>
    <Body style={body}>
      <Container style={container}>
        {/* Header bar */}
        <div style={headerBar}>
          <Img
            src="https://kuraisler.xyz/Portfolio/profile.jpg"
            alt="Mark Crysler Baddo"
            width="40"
            height="40"
            style={avatar}
          />
          <div>
            <Text style={headerName}>Mark Crysler Baddo</Text>
            <Text style={headerRole}>Full-Stack Developer</Text>
          </div>
        </div>

        <Hr style={divider} />

        {/* Message card */}
        <div style={card}>
          <Heading as="h2" style={cardTitle}>
            New Portfolio Message
          </Heading>

          <div style={fieldRow}>
            <Text style={fieldLabel}>From</Text>
            <Text style={fieldValue}>{name}</Text>
          </div>

          <div style={fieldRow}>
            <Text style={fieldLabel}>Email</Text>
            <Link href={`mailto:${email}`} style={fieldLink}>
              {email}
            </Link>
          </div>

          <Hr style={dividerSmall} />

          <div style={fieldRow}>
            <Text style={fieldLabel}>Message</Text>
            <Text style={messageText}>{message}</Text>
          </div>
        </div>

        {/* Reply button */}
        <div style={buttonWrap}>
          <Link href={`mailto:${email}?subject=Re: Portfolio Message`} style={replyButton}>
            Reply to {name}
          </Link>
        </div>

        <Hr style={divider} />

        <Text style={footer}>
          Sent via the contact form on{' '}
          <Link href="https://kuraisler.xyz" style={footerLink}>
            kuraisler.xyz
          </Link>
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactEmail;

/* ─── Styles ─── */

const body = {
  backgroundColor: '#f4f5f7',
  fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
  margin: 0,
  padding: '32px 0',
};

const container = {
  maxWidth: '560px',
  margin: '0 auto',
  padding: '0 16px',
};

const headerBar = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '20px 24px',
  backgroundColor: '#111111',
  borderRadius: '16px 16px 0 0',
};

const avatar = {
  borderRadius: '50%',
  border: '2px solid rgba(255,255,255,0.15)',
};

const headerName = {
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 700,
  margin: 0,
  lineHeight: 1.2,
};

const headerRole = {
  color: '#a1a1aa',
  fontSize: '12px',
  margin: 0,
  fontWeight: 500,
};

const divider = {
  border: 'none',
  borderTop: '1px solid #e5e7eb',
  margin: 0,
};

const dividerSmall = {
  border: 'none',
  borderTop: '1px solid #f0f0f0',
  margin: '16px 0',
};

const card = {
  backgroundColor: '#ffffff',
  borderRadius: '0 0 16px 16px',
  padding: '24px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
};

const cardTitle = {
  fontSize: '18px',
  fontWeight: 700,
  color: '#111111',
  margin: '0 0 20px 0',
};

const fieldRow = {
  marginBottom: '12px',
};

const fieldLabel = {
  fontSize: '11px',
  fontWeight: 600,
  color: '#a1a1aa',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  margin: '0 0 4px 0',
};

const fieldValue = {
  fontSize: '14px',
  color: '#3f3f46',
  margin: 0,
  fontWeight: 500,
};

const fieldLink = {
  fontSize: '14px',
  color: '#2563eb',
  textDecoration: 'none',
  fontWeight: 500,
};

const messageText = {
  fontSize: '14px',
  color: '#3f3f46',
  margin: 0,
  lineHeight: 1.6,
  whiteSpace: 'pre-wrap',
  backgroundColor: '#f9fafb',
  padding: '16px',
  borderRadius: '8px',
  border: '1px solid #f0f0f0',
};

const buttonWrap = {
  textAlign: 'center',
  padding: '20px 0 8px',
};

const replyButton = {
  display: 'inline-block',
  backgroundColor: '#111111',
  color: '#ffffff',
  fontSize: '13px',
  fontWeight: 600,
  textDecoration: 'none',
  padding: '10px 24px',
  borderRadius: '8px',
};

const footer = {
  fontSize: '12px',
  color: '#a1a1aa',
  textAlign: 'center',
  margin: '16px 0 0',
};

const footerLink = {
  color: '#3f3f46',
  textDecoration: 'underline',
};
