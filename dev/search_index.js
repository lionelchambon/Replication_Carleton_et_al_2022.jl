var documenterSearchIndex = {"docs":
[{"location":"tests/#Tests","page":"Tests","title":"Tests","text":"","category":"section"},{"location":"tests/","page":"Tests","title":"Tests","text":"This page is dedicated to the presentation of the tests of the package.","category":"page"},{"location":"tests/","page":"Tests","title":"Tests","text":"Several tests are included in the replication package. They evaluate all functions loading the required files, and creating the replication output.","category":"page"},{"location":"tests/","page":"Tests","title":"Tests","text":"The results of the tests should be displayed on top of the GitHub repository.","category":"page"},{"location":"tests/","page":"Tests","title":"Tests","text":"(Image: Build Status)","category":"page"},{"location":"tests/","page":"Tests","title":"Tests","text":"However, you can run locally the tests of the package.  Caution: these tests heavily rely on a file transfer, and it is advised to have a good internet connection to run them.","category":"page"},{"location":"tests/","page":"Tests","title":"Tests","text":"You can run them locally by entering, in the environment in which you added the replication package:","category":"page"},{"location":"tests/","page":"Tests","title":"Tests","text":"Pkg.test(\"Replication_Carleton_et_al_2022\")","category":"page"},{"location":"tests/","page":"Tests","title":"Tests","text":"They should yield something similar to: ","category":"page"},{"location":"tests/","page":"Tests","title":"Tests","text":"(Image: Tests status)","category":"page"},{"location":"description/#Replication-attempt:-How-it-went","page":"Replication attempt: How it went","title":"Replication attempt: How it went","text":"","category":"section"},{"location":"description/","page":"Replication attempt: How it went","title":"Replication attempt: How it went","text":"This page is dedicated to the presentation of our replication attempt.","category":"page"},{"location":"description/#The-Original-Replication-Package","page":"Replication attempt: How it went","title":"The Original Replication Package","text":"","category":"section"},{"location":"description/","page":"Replication attempt: How it went","title":"Replication attempt: How it went","text":"The replication files and corresponding documentation can be found here. While the associated repository mirrors the structure of the paper, the main challenge is the computation of large-scale climate model projections using Monte Carlo simulations, which are impossible to reproduce in the absence of larger-scale cloud computing capacities. The material does, however, provide a range of intermediate data, so that the replicator does not have to re-run these, which was also why we were hopeful to be able to reproduce some results.","category":"page"},{"location":"description/#Main-difficulties:-Conda-and-large-files","page":"Replication attempt: How it went","title":"Main difficulties: Conda and large files","text":"","category":"section"},{"location":"description/","page":"Replication attempt: How it went","title":"Replication attempt: How it went","text":"According to the documentation, the first step is to et up a Conda environment to run the codes provided by the authors, which are written in Stata, Python, and R. To do so, the replicator is instructed to load the Conda environment asso- ciated with the paper. However, we encountered package dependency problems that impeded the environment from loading correctly. Moreover, even when disregarding the Monte Carlo simulations themselves, loading the necessary data requires at least 85 GB of storage space, not to mention the required RAM needed to manipulate the data. This exceeded the technical limits of one of our computers. Therefore, we initially tried to load only most relevant parts of the package and data onto Nuvolos, hoping that this could resolve storage issues. However, the files were still too large for us to access fully, as our cloud space is limited to 50 GB and is insufficient to decompress the .zip-files we needed. Thus, we split the files across spaces and decided to try and work using the provided intermediate data straight away.","category":"page"},{"location":"description/#Additional-Manipulation-on-Intermediate-Data","page":"Replication attempt: How it went","title":"Additional Manipulation on Intermediate Data","text":"","category":"section"},{"location":"description/","page":"Replication attempt: How it went","title":"Replication attempt: How it went","text":"However, upon closer inspection of the files provided, we came across two prob- lems. First, some files were of small or medium size when read into Stata, but much larger when read into Julia, our language of choice for the replication. This caused one of our computers to crash repeatedly. Second, other files are unusable outside of Stata, as extensions such as .ster or .csvv (sic!) cannot be imported cleanly into Julia. This meant that we attempted to manually repeat some steps of the data cleaning process using the raw data in bash, which di- verted us from the actual replication process. The main problem here was that it was not at all obvious which files were used for which figure, as the code itself relied on running the environment and associated functions which we could not load. By trying to reconstruct different steps of the data manipulation process, we suspect that many of our codes we wrote did not run because we used the wrong inputs for the wrong purposes.","category":"page"},{"location":"list/#Technical-documentation","page":"Technical documentation","title":"Technical documentation","text":"","category":"section"},{"location":"list/","page":"Technical documentation","title":"Technical documentation","text":"This page hosts the technical documentation of the Replication_Carleton_et_al_2022.jl package.","category":"page"},{"location":"list/#Installation","page":"Technical documentation","title":"Installation","text":"","category":"section"},{"location":"list/","page":"Technical documentation","title":"Technical documentation","text":"This package requires Julia (version 1.11.4 was used) to run.  Once you are located in a chosen directory, you can launch Julia on your Terminal by entering:","category":"page"},{"location":"list/","page":"Technical documentation","title":"Technical documentation","text":"julia","category":"page"},{"location":"list/","page":"Technical documentation","title":"Technical documentation","text":"Then, once Julia has started, we are going to need the Pkg module to load the current replication package. We are going to create a local environment, and add to this environment the current replication package. Finally, we are going to load it.","category":"page"},{"location":"list/","page":"Technical documentation","title":"Technical documentation","text":"# Load the Pkg package:\nusing Pkg                                   \n# Activate an environment at the current directory:\nPkg.activate(\".\")                           \n# Download the current replication package:\nPkg.add(url = \"https://github.com/Paulogcd/Replication_Carleton_et_al_2022.jl\")         \n# Load the replication package:\nusing Replication_Carleton_et_al_2022 ","category":"page"},{"location":"list/","page":"Technical documentation","title":"Technical documentation","text":"Now, the package is loaded in your local environment. You can test that it is loaded by using the test() function: ","category":"page"},{"location":"list/","page":"Technical documentation","title":"Technical documentation","text":"# To test the loading of the package:\nReplication_Carleton_et_al_2022.test()","category":"page"},{"location":"list/","page":"Technical documentation","title":"Technical documentation","text":"This function should print a message indicating that the package is well-loaded.","category":"page"},{"location":"list/#Required-files","page":"Technical documentation","title":"Required files","text":"","category":"section"},{"location":"list/","page":"Technical documentation","title":"Technical documentation","text":"To maintain the portability of the package, we did not include the large files required to perform the computations directly in it.","category":"page"},{"location":"list/","page":"Technical documentation","title":"Technical documentation","text":"This is why we need to download these files via the load() function. It will first create two main folders, 0_input and 0_output, and will then download the files in their corresponding subfolders.","category":"page"},{"location":"list/","page":"Technical documentation","title":"Technical documentation","text":"Caution: make sure that you have 5.3 Gigabytes of space available for the package.","category":"page"},{"location":"list/","page":"Technical documentation","title":"Technical documentation","text":"# To download the required files:\nReplication_Carleton_et_al_2022.load()","category":"page"},{"location":"list/#Replication-results","page":"Technical documentation","title":"Replication results","text":"","category":"section"},{"location":"list/","page":"Technical documentation","title":"Technical documentation","text":"Once the required files are downloaded, we can generate the replication results, with the run() function:","category":"page"},{"location":"list/","page":"Technical documentation","title":"Technical documentation","text":"# To generate the replication results:\nReplication_Carleton_et_al_2022.run()","category":"page"},{"location":"list/","page":"Technical documentation","title":"Technical documentation","text":"This function will perform the replication computations and will store the results in the '0_output' folder. The replication results corredspond to:","category":"page"},{"location":"list/","page":"Technical documentation","title":"Technical documentation","text":"Table 1: Descriptive statistics of the initial dataset the authors use.\nFigure 1: Plots of function describing the mortality-temperature relationship, based on the theoretical framework of the authors.\nFigure 2: A heatmap showing the predicted mortality effect.","category":"page"},{"location":"list/#Delete-required-files","page":"Technical documentation","title":"Delete required files","text":"","category":"section"},{"location":"list/","page":"Technical documentation","title":"Technical documentation","text":"Due to the large size of the package files, we also included a function to manage their deletion. If you wish to keep your directory, but without the 0_input and 0_output folders, you can delete them via the following function:","category":"page"},{"location":"list/","page":"Technical documentation","title":"Technical documentation","text":"Replication_Carleton_et_al_2022.delete_folder_setup()","category":"page"},{"location":"list/","page":"Technical documentation","title":"Technical documentation","text":"Be careful. This is irreversible.","category":"page"},{"location":"list/#Undocumented-list-of-functions-of-the-package","page":"Technical documentation","title":"Undocumented list of functions of the package","text":"","category":"section"},{"location":"list/","page":"Technical documentation","title":"Technical documentation","text":"","category":"page"},{"location":"list/#Documented-list-of-functions-of-the-package","page":"Technical documentation","title":"Documented list of functions of the package","text":"","category":"section"},{"location":"list/","page":"Technical documentation","title":"Technical documentation","text":"Modules = [Replication_Carleton_et_al_2022]","category":"page"},{"location":"list/#Replication_Carleton_et_al_2022.create_figure_2-Tuple{}","page":"Technical documentation","title":"Replication_Carleton_et_al_2022.create_figure_2","text":"The function \"createfigure2()\" generates our attempt of replication of the figure 2 in the \"output()\" folder.  It creates two png files, respectively \"Figure22015\" and \"Figure22100\".\n\nRunning a @time evaluation on this function, a MacBook Pro M4 (16Gb of RAM) obtains:      13.516709 seconds (83.77 M allocations: 5.982 GiB, 20.97% gc time)\n\n\n\n\n\n","category":"method"},{"location":"list/#Replication_Carleton_et_al_2022.create_folder_setup-Tuple{}","page":"Technical documentation","title":"Replication_Carleton_et_al_2022.create_folder_setup","text":"The function \"createfoldersetup\" creates the folders \"0input\" (and its subfolders) and \"0output\", that are necessary for the      other functions to run.\n\n\n\n\n\n","category":"method"},{"location":"list/#Replication_Carleton_et_al_2022.create_table_1-Tuple{}","page":"Technical documentation","title":"Replication_Carleton_et_al_2022.create_table_1","text":"creates a pdf containing the replication result of the Figure 1.\n\nThe pdf file is created within the 0_output folder.\n\n\n\n\n\n","category":"method"},{"location":"list/#Replication_Carleton_et_al_2022.delete_Figure_1_estimates-Tuple{}","page":"Technical documentation","title":"Replication_Carleton_et_al_2022.delete_Figure_1_estimates","text":"The function delete_Figure_1_estimates deletes the file \"estimates.csv\" from your folder.\n\n\n\n\n\n","category":"method"},{"location":"list/#Replication_Carleton_et_al_2022.delete_coefficients-Tuple{}","page":"Technical documentation","title":"Replication_Carleton_et_al_2022.delete_coefficients","text":"The function delete_coefficients deletes the file \"coefficients.csv\" from your folder.\n\n\n\n\n\n","category":"method"},{"location":"list/#Replication_Carleton_et_al_2022.delete_covar_pop_count-Tuple{}","page":"Technical documentation","title":"Replication_Carleton_et_al_2022.delete_covar_pop_count","text":"The function delete_covar_pop_count deletes the file \"covarpopcount.dta\" from your folder.\n\n\n\n\n\n","category":"method"},{"location":"list/#Replication_Carleton_et_al_2022.delete_global_mortality_panel_covariates-Tuple{}","page":"Technical documentation","title":"Replication_Carleton_et_al_2022.delete_global_mortality_panel_covariates","text":"The function delete_final_data_covariates deletes the file \"globalmortalitypanel_covariates.dta\" from your folder.\n\n\n\n\n\n","category":"method"},{"location":"list/#Replication_Carleton_et_al_2022.delete_global_mortality_panel_public-Tuple{}","page":"Technical documentation","title":"Replication_Carleton_et_al_2022.delete_global_mortality_panel_public","text":"The function delete_global_mortality_panel_public deletes the file \"globalmortalitypanel_public.dta\" from your folder.\n\n\n\n\n\n","category":"method"},{"location":"list/#Replication_Carleton_et_al_2022.delete_mortality_allpreds_filtered-Tuple{}","page":"Technical documentation","title":"Replication_Carleton_et_al_2022.delete_mortality_allpreds_filtered","text":"The function delete_mortality_allpreds_filtered deletes the file \"globalmortalitypanel_covariates.csv\" from your folder.\n\n\n\n\n\n","category":"method"},{"location":"list/#Replication_Carleton_et_al_2022.delete_table_1-Tuple{}","page":"Technical documentation","title":"Replication_Carleton_et_al_2022.delete_table_1","text":"The functio 'deletetable1()' deletes the pdf of the table 1 in the output folder.\n\n\n\n\n\n","category":"method"},{"location":"list/#Replication_Carleton_et_al_2022.load-Tuple{}","page":"Technical documentation","title":"Replication_Carleton_et_al_2022.load","text":"The function load ensures that all the required data is in the local folder of the user.  It should be run before the run function of the package. \n\n\n\n\n\n","category":"method"},{"location":"list/#Replication_Carleton_et_al_2022.load_Figure_1_estimates-Tuple{}","page":"Technical documentation","title":"Replication_Carleton_et_al_2022.load_Figure_1_estimates","text":"The function loading_Figure_1_estimates ensures that the file \"estimates.csv\" is in your input folder.  It is necessary for the replication of the Figure 1 of the article.\n\n\n\n\n\n","category":"method"},{"location":"list/#Replication_Carleton_et_al_2022.load_coefficients-Tuple{}","page":"Technical documentation","title":"Replication_Carleton_et_al_2022.load_coefficients","text":"The function load_coefficients ensures that the file \"coefficients.csv\" is in your input folder.  It is necessary for the replication of the Figure 1 of the article.\n\n\n\n\n\n","category":"method"},{"location":"list/#Replication_Carleton_et_al_2022.load_covar_pop_count-Tuple{}","page":"Technical documentation","title":"Replication_Carleton_et_al_2022.load_covar_pop_count","text":"The function load_covar_pop_count ensures that the file \"covarpopcount.dta\" is in your input folder.  It is necessary for the replication of the Figure 1 of the article.\n\n\n\n\n\n","category":"method"},{"location":"list/#Replication_Carleton_et_al_2022.load_global_mortality_panel_covariates-Tuple{}","page":"Technical documentation","title":"Replication_Carleton_et_al_2022.load_global_mortality_panel_covariates","text":"The function load_final_data_covariates ensures that the file \"globalmortalitypanel_covariates\" is in your input folder. Since the data weights 2 Gigabytes, be sure to have a good internet connection.\n\n\n\n\n\n","category":"method"},{"location":"list/#Replication_Carleton_et_al_2022.load_mortality_allpreds_filtered-Tuple{}","page":"Technical documentation","title":"Replication_Carleton_et_al_2022.load_mortality_allpreds_filtered","text":"The function load_final_data_covariates ensures that the file \"globalmortalitypanel_covariates\" is in your input folder. Since the data weights 3 Gigabytes, be sure to have a good internet connection.\n\n\n\n\n\n","category":"method"},{"location":"list/#Replication_Carleton_et_al_2022.old_create_table_1-Tuple{}","page":"Technical documentation","title":"Replication_Carleton_et_al_2022.old_create_table_1","text":"The function old_create_table_1() is deprecated. Use create_table_1() instead.\n\n\n\n\n\n","category":"method"},{"location":"list/#Replication_Carleton_et_al_2022.run-Tuple{}","page":"Technical documentation","title":"Replication_Carleton_et_al_2022.run","text":"The function \"run()\" generates all the results we were able to replicate in an \"output\" folder. It also ensures the required data for the replication is available locally.  It may download the files if you do not have them correctly set up. \n\n\n\n\n\n","category":"method"},{"location":"list/#Replication_Carleton_et_al_2022.test-Tuple{}","page":"Technical documentation","title":"Replication_Carleton_et_al_2022.test","text":"The function test is a test to check that the Replication_Carleton_et_al_2022 module is well loaded.\n\n\n\n\n\n","category":"method"},{"location":"#Home","page":"Home","title":"Home","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This page is the home page of the documentation of the replication package of Carleton et al., 2022: Valuing the Global Mortality Consequences of Climate Change Accounting for Adaptation Costs and Benefits Get access  Arrow .","category":"page"},{"location":"","page":"Home","title":"Home","text":"This replication package was done for the Development Economics class, taught by Clément Imbert at Sciences Po in the summer 2025 semester. Our goal was to try to replicate some of the results of the authors, translating the code from STATA, R and Python to Julia.","category":"page"},{"location":"#Introduction","page":"Home","title":"Introduction","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"How will future increases in global temperatures and the effects of climate change influence human mortality? To answer this question, the authors use sub-national data from 40 countries to estimate age-specific mortality-temperature-relationships which they then extrapolate to the rest of the world to assess global mortality risks linked to climate change. The authors then combine this with different climate change projections to estimate fatality rates in the upcoming decades. Finally, based on their regional estimates of mortality rates given climate and income data, they use a revealed preferences approach to infer the costs of climate change adaptation. They find that mortality rates will increase especially in very cold and very hot regions in the more than 64 age group, disproportionately affect poor countries, and estimate the climate-change mortality risk at 3.2% of global GDP under their projected climate change adaptation scenario.","category":"page"},{"location":"","page":"Home","title":"Home","text":"For our replication, we wanted to reproduce figures on the temperature-mortality relationship by age group and its distribution across geographical regions. However, we encountered a number of technical and computational difficulties, which severely limited our ability to replicate the author’s findings, despite various attempts to overcome these logistical challenges.","category":"page"},{"location":"#Overview-of-documentation","page":"Home","title":"Overview of documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The documentation of our replication package is divided so: ","category":"page"},{"location":"","page":"Home","title":"Home","text":"Presentation of the course of our replication attempt\nTechnical documentation\nTests of the package","category":"page"},{"location":"#Presentation-of-the-course-of-our-replication-attempt","page":"Home","title":"Presentation of the course of our replication attempt","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You will find the presentation of our replication attempt at this page. We mainly discuss the challenges we encountered, how we tried to tackle them, and how our expected replication results did compare with our final replication results.","category":"page"},{"location":"#Technical-documentation","page":"Home","title":"Technical documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You will find the list of functions of this package in the list page, available here. This section goes through the installation of the package, how to run the results, and how to delete the files.","category":"page"},{"location":"#Tests-of-the-package","page":"Home","title":"Tests of the package","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You will find the discussion of the set of tests of this package at this page.","category":"page"}]
}
