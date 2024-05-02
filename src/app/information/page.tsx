import styles from './information.module.css';
import { shopInfo, ethos } from '@/api/data';

export default function Information() {

  const fullAddress = `${shopInfo.full_address.city}, ${shopInfo.full_address.state} ${shopInfo.full_address.zip}`;

  return (
    <main className={styles['main-container']}>
      <div className={styles['shop-info-container']}>
        <div className={styles['operating-container']}>
          <p className={styles['info-text']}>{shopInfo.operating_hours.days.toUpperCase()}</p>
          <p className={styles['info-text']}>{shopInfo.operating_hours.hours.toUpperCase()}</p>
        </div>
        <div className={styles['address-container']}>
          <p className={styles['info-text']}>{shopInfo.full_address.address.toUpperCase()}</p>
          <p className={styles['info-text']}>{fullAddress.toUpperCase()}</p>
        </div>
        <div className={styles['ethos-container']}>
          <p>{ethos}</p>
        </div>
      </div>
      <div>
        next one
      </div>
    </main>
  );
}