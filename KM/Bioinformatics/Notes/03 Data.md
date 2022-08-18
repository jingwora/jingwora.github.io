# Data

### FASTQ files
A FASTQ file is a text file that contains the sequence data from the clusters that pass filter on a flow cell.
Each entry in a FASTQ files consists of 4 lines:
1.  A sequence identifier with information about the sequencing run and the cluster. The exact contents of this line vary by based on the BCL to FASTQ conversion software used.
2.  The sequence (the base calls; A, C, T, G and N).
3.  A separator, which is simply a plus (+) sign.
4.  The base call quality scores. These are Phred +33 encoded, using ASCII characters to represent the numerical quality scores.