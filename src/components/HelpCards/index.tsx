import Link from "@docusaurus/Link";

import styles from "./styles.module.css";

export default function QuickNavigation() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Need Help?</h2>
      <div className={styles.cardContainer}>
        <Link className={styles.card} to="https://calendly.com/web3auth/meeting-with-web3auth">
          <div className={styles.cardIconContainer}>
            <svg className={styles.cardIcon} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H5.153C5.38971 2.00011 5.6187 2.08418 5.79924 2.23726C5.97979 2.39034 6.10018 2.6025 6.139 2.836L6.879 7.271C6.91436 7.48222 6.88097 7.69921 6.78376 7.89003C6.68655 8.08085 6.53065 8.23543 6.339 8.331L4.791 9.104C5.34611 10.4797 6.17283 11.7293 7.22178 12.7782C8.27072 13.8272 9.52035 14.6539 10.896 15.209L11.67 13.661C11.7655 13.4695 11.9199 13.3138 12.1106 13.2166C12.3012 13.1194 12.5179 13.0859 12.729 13.121L17.164 13.861C17.3975 13.8998 17.6097 14.0202 17.7627 14.2008C17.9158 14.3813 17.9999 14.6103 18 14.847V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H15C7.82 18 2 12.18 2 5V3Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className={styles.cardContent}>
            <h5>Schedule a Demo</h5>
            <p>Talk to our sales team and understand how Web3Auth suits your needs.</p>
          </div>
        </Link>
        <Link className={styles.card} to="https://web3auth.io/community/">
          <div className={styles.cardIconContainer}>
            <svg viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.cardIcon}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.43262 14C6.43262 12.5148 7.02262 11.0904 8.07282 10.0402C9.12302 8.99002 10.5474 8.40002 12.0326 8.40002H31.6326C33.1178 8.40002 34.5422 8.99002 35.5924 10.0402C36.6426 11.0904 37.2326 12.5148 37.2326 14V25.2C37.2326 26.6852 36.6426 28.1096 35.5924 29.1598C34.5422 30.21 33.1178 30.8 31.6326 30.8H26.0326L17.6326 39.2V30.8H12.0326C10.5474 30.8 9.12302 30.21 8.07282 29.1598C7.02262 28.1096 6.43262 26.6852 6.43262 25.2V14Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.8327 19.6V25.2C42.8327 28.1704 41.6527 31.0192 39.5522 33.1196C37.4518 35.22 34.6031 36.4 31.6326 36.4H28.351L23.4062 41.3476C24.1903 41.7648 25.0834 42 26.0326 42H31.6326L40.0326 50.4V42H45.6327C47.1179 42 48.5422 41.41 49.5924 40.3598C50.6427 39.3096 51.2327 37.8852 51.2327 36.4V25.2C51.2327 23.7148 50.6427 22.2904 49.5924 21.2402C48.5422 20.19 47.1179 19.6 45.6327 19.6H42.8327Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className={styles.cardContent}>
            <h5>Community Forum</h5>
            <p>Join our community of passionate developers - learn, grow and get help for your Web3Auth setup.</p>
          </div>
        </Link>
        <Link className={styles.card} to="/docs/troubleshooting/">
          <div className={styles.cardIconContainer}>
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.cardIcon}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.49 3.17C11.11 1.61 8.88999 1.61 8.50999 3.17C8.45326 3.40442 8.34198 3.62212 8.18522 3.80541C8.02845 3.9887 7.83062 4.13238 7.60784 4.22477C7.38505 4.31716 7.1436 4.35564 6.90313 4.33709C6.66266 4.31854 6.42997 4.24347 6.22399 4.118C4.85199 3.282 3.28199 4.852 4.11799 6.224C4.65799 7.11 4.17899 8.266 3.17099 8.511C1.60999 8.89 1.60999 11.111 3.17099 11.489C3.40547 11.5458 3.62322 11.6572 3.80651 11.8141C3.98979 11.971 4.13343 12.1689 4.22573 12.3918C4.31803 12.6147 4.35639 12.8563 4.33766 13.0968C4.31894 13.3373 4.24368 13.5701 4.11799 13.776C3.28199 15.148 4.85199 16.718 6.22399 15.882C6.42993 15.7563 6.66265 15.6811 6.90318 15.6623C7.14371 15.6436 7.38527 15.682 7.60817 15.7743C7.83108 15.8666 8.02904 16.0102 8.18592 16.1935C8.34281 16.3768 8.45419 16.5945 8.51099 16.829C8.88999 18.39 11.111 18.39 11.489 16.829C11.546 16.5946 11.6575 16.377 11.8144 16.1939C11.9713 16.0107 12.1692 15.8672 12.3921 15.7749C12.6149 15.6826 12.8564 15.6442 13.0969 15.6628C13.3373 15.6815 13.57 15.7565 13.776 15.882C15.148 16.718 16.718 15.148 15.882 13.776C15.7565 13.57 15.6815 13.3373 15.6628 13.0969C15.6442 12.8564 15.6826 12.6149 15.7749 12.3921C15.8672 12.1692 16.0107 11.9713 16.1939 11.8144C16.377 11.6575 16.5946 11.546 16.829 11.489C18.39 11.11 18.39 8.889 16.829 8.511C16.5945 8.45419 16.3768 8.34281 16.1935 8.18593C16.0102 8.02904 15.8666 7.83109 15.7743 7.60818C15.682 7.38527 15.6436 7.14372 15.6623 6.90318C15.681 6.66265 15.7563 6.42994 15.882 6.224C16.718 4.852 15.148 3.282 13.776 4.118C13.5701 4.24368 13.3373 4.31895 13.0968 4.33767C12.8563 4.35639 12.6147 4.31804 12.3918 4.22574C12.1689 4.13344 11.971 3.9898 11.8141 3.80651C11.6572 3.62323 11.5458 3.40548 11.489 3.171L11.49 3.17ZM9.99999 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 9.99999 7C9.20434 7 8.44128 7.31607 7.87867 7.87868C7.31606 8.44129 6.99999 9.20435 6.99999 10C6.99999 10.7956 7.31606 11.5587 7.87867 12.1213C8.44128 12.6839 9.20434 13 9.99999 13V13Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className={styles.cardContent}>
            <h5>Troubleshooting</h5>
            <p>Stuck somewhere? Checkout the Troubleshooting section</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
