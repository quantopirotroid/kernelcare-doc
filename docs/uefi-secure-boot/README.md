# UEFI Secure Boot Support

This new functionality lets kernelcare work on systems with secure boot set up in their UEFI firmware. We are going to add a public certificate to the MOK (Machine Owner Keys) database that kernelcare will use to sign modules.

The latest kernelcare package contains a public certificate and will be available in `/usr/libexec/kcare/kernelcare_pub.der`. For older versions, it could be downloaded from https://patches.kernelcare.com/kernelcare_pub.der to that location. For example:

``` bash
curl -o /usr/libexec/kcare/kernelcare_pub.der https://patches.kernelcare.com/kernelcare_pub.der

```


1. Use `mokutil` as root to add this new MOK to the UEFI firmware. 

```bash
$ mokutil --import /usr/libexec/kcare/kernelcare_pub.der
 input password:
 input password again:
```

It doesn't have a MOK password, and `mokutil` will ask you to create one here. The password is only temporary and will be used on the next boot. 

2. Reboot your machine to enter the MOK manager EFI utility.

  First, go down to 'Enroll Mok': 

![alt text](uefi-enroll-mok.png "Select Enroll MOK")

Then the firmware gives you the option of viewing the new MOK or continuing. Let's continue. 

![alt text](uefi-continue.png "Select Continue")

It then asks you to confirm enrollment. 

![alt text](uefi-yes.png "Select Yes")

Then you will need to enter the password you used when running `mokutil --import`. 

![alt text](uefi-password.png "Enter the password")

Finally, the firmware will ask you to reboot. 

![alt text](uefi-ok.png  "Select OK")

3. Verify the key has been loaded by finding it in the output of

``` bash
$ mokutil --list-enrolled | egrep -i 'SHA1|Issuer'

```

in some cases enrolled key will be not shown but could be verified by:

```bash
$ dmesg | grep -i 'cloud linux' 
[   0.722149] EFI: Loaded cert 'Cloud Linux Software, Inc: Kernel Module Signing Key: 12ff0613c0f80cfba3b2f8eba71ebc27c5a76170' linked to '.system_keyring'
```

That's all. Now you should be able to apply patches as usual.

To get more information about signing kernel modules for secure boot, see
https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/managing_monitoring_and_updating_the_kernel/signing-kernel-modules-for-secure-boot_managing-monitoring-and-updating-the-kernel
