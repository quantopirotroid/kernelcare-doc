# Glibc and OpenSSL patching (KernelCare+)

:::warning Note
KernelCare agent package with **glibc** and **openssl** patching functionality is in BETA.
:::

Glibc and OpenSSL patching is now available for the following operating systems: CentOS/CloudLinux OS 7, Debian 9/10, Ubuntu 16.04/18.04

## Installation and Upgrade

### RPM-based systems

``` bash
$ wget https://patches04.kernelcare.com/userspace/kernelcare-2.32-1.el7.1595920539.56067.28.x86_64.rpm
$ KCARE_PATCH_SERVER=https://patches04.kernelcare.com yum reinstall kernelcare_2.32-1.1599206356.56067.32_amd64.deb
```

### DEB-based systems

``` bash
$ wget https://patches04.kernelcare.com/userspace/kernelcare_2.32-1.1599206356.56067.32_amd64.deb
$ KCARE_PATCH_SERVER=https://patches04.kernelcare.com dpkg -i kernelcare_2.32-1.1598517081.56067.28_amd64.deb
```

## Registration

``` bash
kcarectl --register KEY
```

Contact your Account Manager to obtain KernelCare+ activation key. if you do not have an AM, please contact sales@kernelcare.com

## Usage

Additional _userspace_ parameter should be present in each [CLI command](/command-line/). For example:

``` bash
$ kcarectl --userspace --unload
$ kcarectl --userspace --update
$ kcarectl --userspace --info
```
