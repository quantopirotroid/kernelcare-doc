# Kernelcare Plus

:::warning Note
KernelCare package with KC+ functionality is available as BETA.
:::

## Install [Beta]

### DEB

``` bash
$ wget https://patches04.kernelcare.com/userspace/kernelcare_2.32-1.1599206356.56067.32_amd64.deb
$ KCARE_PATCH_SERVER=https://patches04.kernelcare.com dpkg -i /home/test/kernelcare_2.32-1.1598517081.56067.28_amd64.deb
```

### RPM

``` bash
$ wget https://patches04.kernelcare.com/userspace/kernelcare-2.32-1.el7.1595920539.56067.28.x86_64.rpm
$ KCARE_PATCH_SERVER=https://patches04.kernelcare.com yum install kernelcare_2.32-1.1599206356.56067.32_amd64.deb
```


## Registration [Beta]

``` bash
$ echo "server_id=<provided-server-id>" > /etc/sysconfig/kcare/systemid
```


## Usage [Beta]

Usage is basically the same.

``` bash
$ kcarectl --userspace --update
$ kcarectl --userspace --unload
$ kcarectl --userspace --info
```