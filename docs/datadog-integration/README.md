# Datadog Integration

You can monitor the out of date and inactive servers with help of Kernelcare - DataDog integration. It can provide information on servers assigned to the KernelCare key, or for all the servers in partner account.

Our intergration is installed with the Datadog Agent (Agent-based integration)
[https://docs.datadoghq.com/getting_started/integrations/](https://docs.datadoghq.com/getting_started/integrations/)

Our integration located on official datadog github repository
[https://github.com/DataDog/integrations-extras/tree/master/kernelcare](https://github.com/DataDog/integrations-extras/tree/master/kernelcare)

To install our integration on server which already has DataDog Agent installed.

Centos8:

Install needed yum packages and prepare build environment.

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

Install python wheel package to datadog-agent.

```
cp /root/dd/integrations-extras/kernelcare/dist/datadog_kernelcare*.whl /tmp/.
sudo -u dd-agent datadog-agent integration install -w /tmp/datadog_kernelcare*.whl
```

Move configuration file.

```
mv /etc/datadog-agent/conf.d/kernelcare.d/conf.yaml.example /etc/datadog-agent/conf.d/kernelcare.d/conf.yaml
```

In configureation file you need to specify `key` parameter - KernelCare key. If the licenses are IP-based, you can find your login & API security token in Profile section of your CLN account. You need to specify `login` and `api_token` parameters.

Restart the datadog Agent.

```
systemctl restart datadog-agent
```

You can check your newly installed integration (please run NOT under python-virtualenv)

```
datadog-agent check kernelcare
```

After you integration installed and work property you can login to DataDog dashboard and check metrics.
