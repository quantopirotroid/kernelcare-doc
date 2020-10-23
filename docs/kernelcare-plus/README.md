# Glibc and OpenSSL patching (KernelCare+)

:::warning Note
KernelCare agent package with **glibc** and **openssl** patching functionality is in BETA.
:::

Glibc and OpenSSL patching is now available for the following operating systems: CentOS/CloudLinux OS 7, Debian 9/10, Ubuntu 16.04/18.04

## Installation and upgrade

Userspace processes patching feature is available in the KernelCare package.

## Usage

To apply the available patches to all userspace processes, run the following command:

``` bash
$ kcarectl --lib-update
```

To gather information about what processes were patched, run the following command:

```bash
$ kcarectl --lib-info
```

To unpatch all involved processes, run the following command:

```bash
$ kcarectl --lib-unload
```

## Auto update

Userspace patching cron job is disabled by default. To enable it, run the following command:

```bash
libcare-cron init
```
