var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = Fetch","category":"page"},{"location":"#Fetch","page":"Home","title":"Fetch","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for Fetch.","category":"page"},{"location":"#Quick-start","page":"Home","title":"Quick start","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The package can be installed with the Julia package manager. From the Julia REPL, type ] to enter the Pkg REPL mode and run:","category":"page"},{"location":"","page":"Home","title":"Home","text":"pkg> add Fetch","category":"page"},{"location":"#Download-file-from-Google-drive","page":"Home","title":"Download file from Google drive","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Download file or Google Sheet from Google drive via the share link:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Fetch\nlink = \"https://drive.google.com/file/d/1OiX6gEWRm57kb1H8L0K_HWN_pzc-sk8y/view?usp=sharing\"\ngdownload(link, pwd())","category":"page"},{"location":"#Download-dataset-from-Kaggle","page":"Home","title":"Download dataset from Kaggle","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Download dataset from Kaggle via the name:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Fetch\ndataset = \"ningjingyu/fetchtest\"\nkdownload(dataset, pwd())","category":"page"},{"location":"#Intergrate-with-DataDeps.jl","page":"Home","title":"Intergrate with DataDeps.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"According to DataDeps.jl, DataDep can be construct as following:","category":"page"},{"location":"","page":"Home","title":"Home","text":"DataDep(\n    name::String,\n    message::String,\n    remote_path::Union{String,Vector{String}...},\n    [checksum::Union{String,Vector{String}...},];\n    fetch_method=fetch_default\n    post_fetch_method=identity\n)","category":"page"},{"location":"","page":"Home","title":"Home","text":"By using Fetch.jl, one can upload their dataset to Google drive, and construct DataDep by setting fetch_method=gdownload.","category":"page"},{"location":"","page":"Home","title":"Home","text":"using DataDeps\nusing Fetch\n\nregister(DataDep(\n    \"FetchTest\",\n    \"\"\"Test dataset\"\"\",\n    \"https://drive.google.com/file/d/1OiX6gEWRm57kb1H8L0K_HWN_pzc-sk8y/view?usp=sharing\",\n    \"b083597a25bec4c82c2060651be40c0bb71075b472d3b0fabd85af92cc4a7076\",\n    fetch_method=gdownload,\n    post_fetch_method=unpack\n))\n\ndatadep\"FetchTest\"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Or to Kaggle","category":"page"},{"location":"","page":"Home","title":"Home","text":"using DataDeps\nusing Fetch\n\nregister(DataDep(\n    \"FetchTest\",\n    \"\"\"Test dataset\"\"\",\n    \"ningjingyu/fetchtest\",\n    \"65492e1f4c6affb7955125e5e4cece2bb547e482627f3af9812c06448dae40a9\",\n    fetch_method=kdownload,\n    post_fetch_method=unpack\n))\n\ndatadep\"FetchTest\"","category":"page"},{"location":"","page":"Home","title":"Home","text":"According to the document of Kaggle-api one needs to set their environment variables KAGGLE_USERNAME and KAGGLE_KEY, or simply download the api token from Kaggle, and place this file in the location ~/.kaggle/kaggle.json (on Windows in the location C:\\Users\\<Windows-username>\\.kaggle\\kaggle.json).","category":"page"},{"location":"#Index","page":"Home","title":"Index","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [Fetch]","category":"page"},{"location":"#Fetch.gdownload-Tuple{Any, Any}","page":"Home","title":"Fetch.gdownload","text":"gdownload(url, localdir)\n\nDownload file or Google Sheet from Google drive.\n\n\n\n\n\n","category":"method"},{"location":"#Fetch.unshortlink-Tuple{Any}","page":"Home","title":"Fetch.unshortlink","text":"unshortlink(url)\n\nreturn unshorten url or the url if it is not a short link\n\n\n\n\n\n","category":"method"}]
}
