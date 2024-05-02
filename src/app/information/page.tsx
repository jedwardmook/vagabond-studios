import styles from './information.module.css';
import { shopInfo, ethos } from '@/api/data';
import Image from 'next/image';

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
          <p className={styles['info-text']}>{ethos}</p>
        </div>
      </div>
      <div className={styles['images-container']}>
        <div className={styles['map-container']}>
          <Image
            src={`/images/map.png`}
            alt="Map"
            width={1000}
            height={1000}
            className={styles['map-image']}
          />
        </div>
        <div className={styles['floor-plan-container']}>
          <Image
            src={`/images/floor_plan.png`}
            alt="Map"
            width={1000}
            height={1000}
            className={styles['floor-plan-image']}
          />
        </div>
        <div className={styles['backdrop-container']}>
          <Image
            src={`/images/backdrop.png`}
            alt="Map"
            width={1000}
            height={1000}
            className={styles['backdrop-image']}
          />
        </div>
      </div>
    </main>
  );
}