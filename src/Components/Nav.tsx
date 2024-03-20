"use client"
import { useState } from "react";
import Image from "next/image"
import styles from "./nav.module.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    "projects",
    "booking",
    "gallery events",
    "blog",
    "information"
  ]
  
  return (
    isOpen?
    <div className={styles.open}>
      <div className={styles['navigation-container']}>
        <p className={styles.heading}>VAGABOND STUDIOS · BEAUTIFUL CONCRETE DAYLIGHT WITH LARGE WINDOWS IN THE HEART OF LONG ISLAND CITY</p>
        <ul className={styles['nav-link-list']}>
          {links.map((link) => {
            return (
            <a key={link}><li className={styles['nav-link']}>{link.toUpperCase()}</li></a>
            )
          })}
        </ul>
        <div className={styles['studio-info-container']}>
          <div>
            <p className={styles['studio-info']}>MONDAY - SUNDAY</p>
            <p className={styles['studio-info']}>ALL DAY</p>
          </div>
          <div>
            <p className={styles['studio-info']}>37-24 24TH ST.</p>
            <p className={styles['studio-info']}>LONG ISLAND CITY, NY 11101</p>
          </div>
        </div>
      </div>
      <div className={styles['close-container']}>
        <button className={styles['close-button']} onClick={() => setIsOpen(!isOpen)}>
          <Image
            src={`close.svg`}
            alt="close"
            width={25}
            height={45}
          />
        </button>
        <Image
            src={`vs.svg`}
            alt="Vagabond Studios"
            width={25}
            height={60}
            className={styles.vs}
          />
      </div>
    </div>
    :
    <button onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.closed}>
        <Image
          src={`menu.svg`}
          alt="menu"
          width={30}
          height={30}
          className={styles.menu}
        />
        <Image
          src={`vs.svg`}
          alt="Vagabond Studios"
          width={25}
          height={60}
          className={styles.vs}
        />
      </div>
    </button>
    )
}