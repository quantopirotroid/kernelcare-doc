# Scanner Interface

::: warning
Scanner Interface is only available for KernelCare+ and KernelCare Enterprise. Reach out to sales@kernelcare.com to get instructions how to use KernelCare Scanner Interface
:::

## Issue description

Commonly used security scanners can still see CVEs even if they are patched by KernelCare. It turns out that all their decisions about CVE are based on:

* currently installed (or not) kernel packages
* uname information

## How to use

It’s rather simple. New scan results after installing a package and applying a patchset should not show any kernel CVEs that are handled by KernelCare.

For example, Nessus for an old kernel shows a bunch of detected CVEs

![](/images/scanner-manipulation-before.png)

After patches were applied, there are no kernel-related CVEs

![](/images/scanner-manipulation-after.png)

