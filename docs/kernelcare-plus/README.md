# Glibc and OpenSSL patching (KernelCare+)

:::warning Note
KernelCare agent package with **glibc** and **openssl** patching functionality is in BETA.
:::

Glibc and OpenSSL patching is now available for the following operating systems: CentOS/CloudLinux OS 7, Debian 9/10, Ubuntu 16.04/18.04

## Installation and Upgrade

Userspace processes patching feature is availiable in kernelcare package.

## Usage

To apply availiable patches to all userspace processes  you can run:

``` bash
$ kcarectl --lib-update
```

To gather information about which proccese were patched:

```bash
$ kcarectl --lib-info
```

To unpatch all involved processes use:

```bash
$ kcarectl --lib-unload
```

## Auto update

Userspace patching cron job is disabled by default and to enable it run:

```bash
libcare-cron init
```
