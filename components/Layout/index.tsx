import { Header } from "components";
import { Footer } from "components";
import styles from './Layout.module.scss';

interface LayoutProps {
    children: React.ReactChild
}

export const  Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
    return (
      <>
        
        <main className={styles.main}>
            <Header />
            <div className={styles.container}>
                {children}
            </div>
      </main>
      <Footer />
      </>
    );
  };