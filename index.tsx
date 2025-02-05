import '@/public/css/overlayscrollbars.min.css'
import '@/public/css/font.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '@/public/css/template.css'
import "@/app/_shared/layout/index.css"

export default function Index({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/DotNetExpertLogo.png" sizes="any" />
      </head>
      <body suppressHydrationWarning={true}>{children}
      </body>
    </html>
  );
}