# Unpatched Library Detector (UChecker)

## Description

UChecker is a scanner that checks network Linux servers and detects out-of-date libraries both on disk and in memory. KernelCare’s open-source scanner will find false negatives by correctly reporting vulnerable libraries running in memory that could be reported as updated by other scanners.

The UChecker (originated from "userspace checker") works with all modern Linux Distributions, it is free and open-source, distributed under the GNU General Public License.

## How UChecker works

This activity diagram shows how UChecker works:

![](/images/uchecker.jpg)

## Usage

To scan your systems, run the following command:

```
$ curl -s -L https://kernelcare.com/uchecker | sudo python
```

You will receive the following output:

```
[*] Process httpd[15516] linked to the `libc-2.17.so` that is not up to date.

You may want to update libraries above and restart corresponding processes.

KernelCare+ allows to resolve such issues with no process downtime. To find 
out more, please, visit https://lp.kernelcare.com/kernelcare-early-access?
```

The following information is available in the output:

* Process ID
* Process Name


## Troubleshooting

To verbose output, you can choose a logging level: `ERROR`, `WARNING`, `INFO`, and `DEBUG`.

For example:

```
$ curl -s -L https://kernelcare.com/uchecker | sudo LOGLEVEL=debug python
```

To learn more, visit the [UChecker Github page](https://github.com/cloudlinux/kcare-uchecker).