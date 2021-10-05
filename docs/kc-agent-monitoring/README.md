# KC agent monitoring via CLN Portal

[[toc]]

## Built-in monitoring

Systems protected by KernelCare can be monitored by means of CloudLinux Network (CLN) portal available at [https://cln.cloudlinux.com](https://cln.cloudlinux.com).

Click _KernelCare activation key_ to see the list of servers activated with it. Servers marked with exclamation mark do not have the latest KernelCare patches installed.

![](/images/kckeymonit_zoom70.png)

## KernelCare monitoring API

It is possible to integrate KernelCare status monitoring with any third-party monitoring system that supports REST API.

* The query syntax for key-based licenses is: `https://cln.cloudlinux.com/api/kcare/nagios/{key_id}`
* The query syntax for IP-based licenses (resellers) is: `https://cln.cloudlinux.com/api/kcare/nagios-res/{login}/{token}`

The latest CloudLinux REST API description is available at [https://cln.cloudlinux.com/clweb/downloads/cloudlinux-rest-api.pdf](https://cln.cloudlinux.com/clweb/downloads/cloudlinux-rest-api.pdf)


## Zabbix Template


Zabbix Template for KernelCare

`check_kcare` is a Nagios/Zabbix plugin that provides a way to monitor the out of date and inactive servers. It can provide information on servers assigned to the KernelCare key, or for all the servers in partner account.

You can download the plugin from [https://patches.kernelcare.com/downloads/nagios/check_kcare](https://patches.kernelcare.com/downloads/nagios/check_kcare)

/usr/lib/zabbix/externalscripts

(or any other directory configured for Zabbix external check scripts)

Script options:

| | |
|-|-|
|`-z` | Zabbix compatible format (Nagios otherwise)|
|`-k KERNELCARE_KEY` | retrieve status for servers associated with KEY|
|`-l PARTNER_LOGIN --api-token TOKEN` | retrieve status for all servers in partner account based on login/token|
|`-c o,u,i -- return CRITICAL` | list of coma separate o, u & i.<br>`o` -out of date<br>`u` - unknown kernel<br>`i` - inactive server|
|`-w o,u,i -- return WARNING` | list of coma separate o, u & i.<br>`o` - out of date<br>`u` - unknown kernel<br>`i` - inactive server|

You can download Zabbix template at:

[https://patches.kernelcare.com/downloads/nagios/kcare_zabbix_template.xml](https://patches.kernelcare.com/downloads/nagios/kcare_zabbix_template.xml)

## Datadog Integration

You can monitor out-of-date and inactive KernelCare agents with the help of DataDog integration. It can provide information on servers assigned to a KernelCare key or for all servers in a partner CLN account.

The intergration is installed with Datadog Agent (Agent-based integration)
[https://docs.datadoghq.com/getting_started/integrations/](https://docs.datadoghq.com/getting_started/integrations/)

The integration is available from the official datadog github repository
[https://github.com/DataDog/integrations-extras/tree/master/kernelcare](https://github.com/DataDog/integrations-extras/tree/master/kernelcare)

#### Installation on a system that has DataDog Agent installed.

CentOS 8 (or other EL8-based):

Install required yum packages and prepare build environment.

```
yum -y install python3 python3-devel gcc git
python3 -m venv /tmp/python3-env
. /tmp/python3-env/bin/activate
pip3 install "datadog-checks-dev[cli]"
mkdir $HOME/dd/
cd $HOME/dd/
git clone https://github.com/DataDog/integrations-extras.git
ddev config set repo extras
```

Build python wheel package.

```
ddev -e release build kernelcare
```

Install python wheel package to `datadog-agent`.

```
cp /root/dd/integrations-extras/kernelcare/dist/datadog_kernelcare*.whl /tmp/.
sudo -u dd-agent datadog-agent integration install -w /tmp/datadog_kernelcare*.whl
```

Move configuration file.

```
mv /etc/datadog-agent/conf.d/kernelcare.d/conf.yaml.example /etc/datadog-agent/conf.d/kernelcare.d/conf.yaml
```

In the configureation file you need to specify the `key` parameter - the KernelCare activation key. If the licenses are IP-based, you can find your login & API security token in Profile section of your CLN account. You need to specify `login` and `api_token` parameters.

Restart the datadog Agent.

```
systemctl restart datadog-agent
```

You can check your newly installed integration (please do NOT run under python-virtualenv)

```
datadog-agent check kernelcare
```

After the integration is installed and launched you can login to DataDog dashboard to check metrics.


