import styles from './information.module.css';
import { shopInfo, ethos } from '@/api/data';
import Image from 'next/image';
import { getEquipment, getResidents } from '../../../sanity/sanity-utils';

type Resident = {
  _id: string,
  name: string,
  title: string,
  contact: string,
}

type Equipment = {
  _id: string,
  equipment: string,
  description: string,
}

export default async function Information() {
  let residents = [];
  let equipment = [];

  try {
    residents = await getResidents();
    } catch (error) {
    console.error('Error:', error);
  }

  try {
    equipment = await getEquipment();
  } catch (error) {
    console.error('Error', error);
  }

  const fullAddress = `${shopInfo.full_address.city}, ${shopInfo.full_address.state} ${shopInfo.full_address.zip}`;
  const residentsToDisplay = residents.map((resident: Resident, index: number) => {
    let className = `resident-container-${index + 1}`;

    return (
      <div key={resident._id} className={styles[className]}>
        <p className={styles['resident-item']}><strong>{resident.name}</strong></p>
        <p className={styles['resident-item']}>{resident.title}</p>
        <p className={styles['resident-item']}>{resident.contact}</p>
      </div>
    );
  });

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
      <div className={styles['images-residents-container']}>
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
        <div className={styles['residents-container']}>
          <p className={styles['residents-title']}>RESIDENTS</p>
        </div>
        {residentsToDisplay}
        <div className={styles['equipment-container']}>
          <p className={styles['equipment-title']}>Equipment</p>
          <div className={styles['equipment-list']}>
            {equipment.map((piece: Equipment) => {
              return (
                <>
                  <p key={piece._id} className={styles['equipment-item']}>{piece.equipment}</p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}