# Glibc and OpenSSL patching (KernelCare+)

Glibc and OpenSSL patching is now available for the following operating systems: CentOS/RHEL/CloudLinux OS 7, Oracle Linux 7, Debian 9/10, Ubuntu 16.04/18.04, Proxmox VE 6.

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
