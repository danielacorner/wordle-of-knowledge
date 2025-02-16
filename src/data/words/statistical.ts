const statisticalWords = [
  {
    word: 'Mean',
    definition: 'The average of a set of numbers.',
  },
  {
    word: 'Median',
    definition: 'The middle value in a list of numbers.',
  },
  {
    word: 'Mode',
    definition: 'The value that appears most frequently in a data set.',
  },
  {
    word: 'Standard Deviation',
    definition: 'A measure of the amount of variation or dispersion in a set of values.',
  },
  {
    word: 'Variance',
    definition: 'The expectation of the squared deviation of a random variable from its mean.',
  },
  {
    word: 'Population',
    definition: 'The entire set of individuals or items that are of interest.',
  },
  {
    word: 'Sample',
    definition: 'A subset of a population used for analysis.',
  },
  {
    word: 'Hypothesis',
    definition: 'A proposed explanation for a phenomenon.',
  },
  {
    word: 'P-value',
    definition: 'The probability of obtaining test results at least as extreme as the results actually observed.',
  },
  {
    word: 'Confidence Interval',
    definition: 'A range of values that is likely to contain the population parameter with a certain level of confidence.',
  },
  {
    word: 'Regression',
    definition: 'A statistical method for estimating the relationships among variables.',
  },
  {
    word: 'Correlation',
    definition: 'A measure of the relationship between two variables.',
  },
  {
    word: 'Outlier',
    definition: 'A data point that differs significantly from other observations.',
  },
  {
    word: 'Skewness',
    definition: 'A measure of the asymmetry of the probability distribution of a real-valued random variable.',
  },
  {
    word: 'Kurtosis',
    definition: 'A measure of the tailedness of the probability distribution of a real-valued random variable.',
  },
  {
    word: 'ANOVA',
    definition: 'Analysis of variance; a statistical method used to compare means of three or more samples.',
  },
  {
    word: 'Chi-Square Test',
    definition: 'A statistical test to determine if there is a significant association between two categorical variables.',
  },
  {
    word: 'T-test',
    definition: 'A statistical test used to compare the means of two groups.',
  },
  {
    word: 'Z-score',
    definition: 'The number of standard deviations a data point is from the mean.',
  },
  {
    word: 'Central Limit Theorem',
    definition: 'The theorem that states that the distribution of sample means approaches a normal distribution as the sample size increases.',
  },
  {
    word: 'Bayes’ Theorem',
    definition: 'A mathematical formula used to determine conditional probabilities.',
  },
  {
    word: 'Data Mining',
    definition: 'The process of discovering patterns in large data sets.',
  },
  {
    word: 'Data Visualization',
    definition: 'The graphical representation of information and data.',
  },
  {
    word: 'Sampling Error',
    definition: 'The error caused by observing a sample instead of the whole population.',
  },
  {
    word: 'Bias',
    definition: 'A systematic error introduced into sampling or testing by selecting or encouraging one outcome or answer over others.',
  },
  {
    word: 'Statistical Power',
    definition: 'The probability that a statistical test will correctly reject a false null hypothesis.',
  },
  {
    word: 'Effect Size',
    definition: 'A quantitative measure of the magnitude of the experimental effect.',
  },
  {
    word: 'Multicollinearity',
    definition: 'A situation in which two or more predictor variables in a multiple regression model are highly correlated.',
  },
  {
    word: 'Time Series',
    definition: 'A series of data points indexed in time order.',
  },
  {
    word: 'Forecasting',
    definition: 'The process of predicting future values based on past data.',
  },
  {
    word: 'Cohort Study',
    definition: 'A research study that follows a group of people over time.',
  },
  {
    word: 'Cross-Sectional Study',
    definition: 'A study that analyzes data from a population at a specific point in time.',
  },
  {
    word: 'Longitudinal Study',
    definition: 'A study that observes the same subjects over a period of time.',
  },
  {
    word: 'Randomized Control Trial',
    definition: 'An experiment that randomly assigns participants to a treatment or control group.',
  },
  {
    word: 'Survey',
    definition: 'A method of gathering information from individuals.',
  },
  {
    word: 'Questionnaire',
    definition: 'A tool for collecting data from respondents.',
  },
  {
    word: 'Qualitative Research',
    definition: 'Research that focuses on understanding human behavior and the reasons that govern such behavior.',
  },
  {
    word: 'Quantitative Research',
    definition: 'Research that focuses on quantifying relationships, behaviors, and phenomena.',
  },
  {
    word: 'Statistical Software',
    definition: 'Programs used for statistical analysis and data visualization.',
  },
  {
    word: 'Data Cleaning',
    definition: 'The process of correcting or removing inaccurate records from a dataset.',
  },
  {
    word: 'Data Transformation',
    definition: 'The process of converting data from one format or structure into another.',
  },
  {
    word: 'Data Integration',
    definition: 'The process of combining data from different sources into a unified view.',
  },
  {
    word: 'Data Warehousing',
    definition: 'The storage of data in a central repository for analysis and reporting.',
  },
  {
    word: 'Big Data',
    definition: 'Extremely large data sets that may be analyzed computationally to reveal patterns, trends, and associations.',
  },
  {
    word: 'Machine Learning',
    definition: 'A subset of artificial intelligence that enables systems to learn from data.',
  },
  {
    word: 'Artificial Intelligence',
    definition: 'The simulation of human intelligence processes by machines.',
  },
  {
    word: 'Neural Networks',
    definition: 'Computational models inspired by the human brain that are used in machine learning.',
  },
  {
    word: 'Deep Learning',
    definition: 'A subset of machine learning that uses neural networks with many layers.',
  },
  {
    word: 'Natural Language Processing',
    definition: 'A field of artificial intelligence that focuses on the interaction between computers and humans through natural language.',
  },
  {
    word: 'Data Ethics',
    definition: 'The field of study that examines ethical issues related to data collection and usage.',
  },
  {
    word: 'Data Privacy',
    definition: 'The aspect of data protection that deals with the proper handling of data.',
  },
  {
    word: 'Data Security',
    definition: 'The process of protecting data from unauthorized access and corruption.',
  },
  {
    word: 'Data Governance',
    definition: 'The management of data availability, usability, integrity, and security in an organization.',
  },
  {
    word: 'Data Lifecycle',
    definition: 'The stages data goes through from creation to deletion.',
  },
  {
    word: 'Data Stewardship',
    definition: 'The management and oversight of an organization’s data assets.',
  },
  {
    word: 'Data Provenance',
    definition: 'The history of the data, including its origin and changes over time.',
  },
  {
    word: 'Data Lineage',
    definition: 'The tracking of data as it moves from one system to another.',
  },
  {
    word: 'Data Modeling',
    definition: 'The process of creating a data model to represent data structures and relationships.',
  },
  {
    word: 'Data Architecture',
    definition: 'The design of data structures and the relationships between them.',
  },
  {
    word: 'Data Analytics',
    definition: 'The science of analyzing raw data to make conclusions about that information.',
  },
  {
    word: 'Predictive Analytics',
    definition: 'The branch of advanced analytics that uses historical data to make predictions about future outcomes.',
  },
  {
    word: 'Prescriptive Analytics',
    definition: 'The process of using data to recommend actions for optimal outcomes.',
  },
  {
    word: 'Descriptive Analytics',
    definition: 'The process of using data to describe and understand past behavior.',
  },
  {
    word: 'Exploratory Data Analysis',
    definition: 'An approach to analyzing data sets to summarize their main characteristics, often using visual methods.',
  },
  {
    word: 'Inferential Statistics',
    definition: 'Statistics that draw conclusions about populations based on sample data.',
  },
  {
    word: 'Statistical Significance',
    definition: 'A determination that the results of an experiment are unlikely to have occurred by chance.',
  },
  {
    word: 'Null Hypothesis',
    definition: 'A general statement or default position that there is no relationship between two measured phenomena.',
  },
  {
    word: 'Alternative Hypothesis',
    definition: 'The hypothesis that sample observations are influenced by some non-random cause.',
  },
  {
    word: 'Type I Error',
    definition: 'The incorrect rejection of a true null hypothesis.',
  },
  {
    word: 'Type II Error',
    definition: 'The failure to reject a false null hypothesis.',
  },
  {
    word: 'Statistical Model',
    definition: 'A mathematical representation of observed data.',
  },
  {
    word: 'Statistical Inference',
    definition: 'The process of using data analysis to deduce properties of an underlying probability distribution.',
  },
  {
    word: 'Statistical Sampling',
    definition: 'The process of selecting a subset of individuals from a population to estimate characteristics of the whole population.',
  },
  {
    word: 'Sampling Distribution',
    definition: 'The probability distribution of a statistic obtained through a large number of samples drawn from a specific population.',
  },
];

export default statisticalWords;