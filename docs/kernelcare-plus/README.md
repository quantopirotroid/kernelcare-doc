# Glibc and OpenSSL patching (KernelCare+)

Glibc and OpenSSL patching is now available for the following operating systems:

* CentOS/RHEL/CloudLinux OS 7
* CloudLinux OS 8
* AlmaLinux 8
* Oracle Linux 7
* Oracle Linux 8
* Debian 9/10
* Ubuntu 16.04/18.04
* Proxmox VE 6.
* Scientific Linux

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

To gather information about applyed patches:

```bash
$ kcarectl --lib-patch-info
```

To unpatch all involved processes, run the following command:

```bash
$ kcarectl --lib-unload
```

# Blacklisting

If you need to avoid patching of some particular process it could be done by blacklist defining. 
Default one is located in `/var/lib/libcare/blacklist` and contains a package-provided list. 
You can overwrite those values by creating `/var/cache/kcare/userspace/blacklist` file with the higher priority.

## Auto update

Userspace patching cron job is disabled by default. To enable it, run the following command:

```bash
libcare-cron init
```

## Troubleshooting

### Auditd logs

The libcare tools heavily use a `ptrace` syscall and, in case of `auditd` trace it's calls, there will be a lot of records in a log. There is a rule that provided by kernelcare package and located here `/etc/audit/rules.d/kernelcare.rules`. It will exclue kernelcare processes from audit.

Note: no such rule is provided for `el6` due to old `autditd` restrictions. There is a command that will add such rule in runtime

```
auditctl -l | grep kcare | cut -d' ' -f2- | xargs -t -L1 -r auditctl -d && pgrep libcare-server | xargs -t -n1 -i auditctl -A exit,never -F arch=b64 -S ptrace -F pid="{}" -k kcarever | xargs -t -n1 -i auditctl -A exit,never -F arch=b64 -S ptrace -F pid="{}" -k kcare
```

It removes all currently enabled kernelcare rules and adds a new one by libcare's process ID.

