import React, { Fragment, useState } from "react";
import styles from "./settings.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { updateUser, udpatePassword } from "../../service/api";

const Settings = () => {
  const [formData, setFormData] = useState({
    description: "",
    email: "",
    username: "",
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const onBasicInfoSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateUser(formData);

      window.location.assign("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  const onDescriptionChange = (event) => {
    setFormData({
      ...formData,
      description: event.target.value,
    });
  };

  const onEmailChange = (event) => {
    setFormData({
      ...formData,
      email: event.target.value,
    });
  };

  const onUsernameChange = (event) => {
    setFormData({
      ...formData,
      username: event.target.value,
    });
  };

  const onNewPasswordSubmit = async (event) => {
    event.preventDefault();

    try {
      await udpatePassword(passwordData);

      window.location.assign("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  const onOldPasswordChange = (event) => {
    setPasswordData({
      ...passwordData,
      oldPassword: event.target.value,
    });
  };

  const onNewPasswordChange = (event) => {
    setPasswordData({
      ...passwordData,
      newPassword: event.target.value,
    });
  };

  const onConfirmNewPasswordChange = (event) => {
    setPasswordData({
      ...passwordData,
      confirmNewPassword: event.target.value,
    });
  };

  return (
    <Fragment>
      <section className={styles.settingContainer}>
        <Tabs>
          <TabList>
            <Tab>Change basic info</Tab>
            <Tab>Upload profile image</Tab>
            <Tab>Change password</Tab>
          </TabList>

          <TabPanel>
            <div className={styles.basicInfoChangeContainer}>
              <form onSubmit={onBasicInfoSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="description">Change your description</label>
                  <textarea
                    name="description"
                    cols="30"
                    rows="10"
                    onChange={onDescriptionChange}
                  ></textarea>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="description">Change your email</label>
                  <input type="text" name="email" onChange={onEmailChange} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="description">Change your username</label>
                  <input
                    type="text"
                    name="username"
                    onChange={onUsernameChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="submit"
                    value="Update"
                    className={`${styles.btn} ${styles.btnPrimary} ${styles.lead}`}
                  />
                </div>
              </form>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.uploadProfileImageContainer}></div>
          </TabPanel>
          <TabPanel>
            <div className={styles.changePasswordContainer}>
              <form onSubmit={onNewPasswordSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="oldPassword">Current password</label>
                  <input
                    type="password"
                    name="oldPassword"
                    onChange={onOldPasswordChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    onChange={onNewPasswordChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="confirmNewPassword">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    name="confirmNewPassword"
                    onChange={onConfirmNewPasswordChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="submit"
                    value="Update Password"
                    className={`${styles.btn} ${styles.btnPrimary} ${styles.lead}`}
                  />
                </div>
              </form>
            </div>
          </TabPanel>
        </Tabs>
      </section>
    </Fragment>
  );
};

export default Settings;
