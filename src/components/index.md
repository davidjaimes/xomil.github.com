---

---

## Get Started

Install the [Miniforge distribution](https://github.com/conda-forge/miniforge):
```shell
bash Miniforge3-MacOSX-arm64.sh
```

Create an environment with the name `arm64`:
```shell
mamba create -n arm64 python=3.12 pandas pyarrow
```

Activate newly created environment:
```shell
mamba activate arm64
```

Install other packages:
```shell
pip install jupyterlab python-calamine xlsxwriter
```

gcc version:
```plaintext
Apple clang version 15.0.0 (clang-1500.1.0.2.5)
Target: arm64-apple-darwin23.3.0
Thread model: posix
InstalledDir: /Library/Developer/CommandLineTools/usr/bin
```