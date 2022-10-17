# Bioinformatic Tools


### Pysam
Pysam is a python module for reading, manipulating and writing genomic data sets.
Pysam is a wrapper of the htslib C-API and provides facilities to read and write.

Features:
- Read and write SAM/BAM/VCF/BCF/BED/GFF/GTF/FASTA/FASTQ files
- Using samtools / bcftools commands. 
- Working with tabix-indexed files.

[Docs](https://pysam.readthedocs.io/en/latest/)  | [Github](https://github.com/pysam-developers/pysam)
[[python]] | [[samtools]] | [[tabix]]


### hts-python
- A pythonic wrapper for htslib C-API using python cffi.

### pytabix
- This module allows fast random access to sorted files compressed with bgzip and indexed by tabix. 

### Samtools / BCFtools 
- Samtools: Reading/writing/editing/indexing/viewing SAM/BAM/CRAM format.
- BCFtools: Reading/writing BCF2/VCF/gVCF files and calling/filtering/summarising SNP and short indel sequence variants.
- Samtools and BCFtools both use HTSlib (A C library for reading/writing high-throughput sequencing data) internally.
[Docs](http://www.htslib.org/)  | [Github](https://github.com/samtools/)


### bgzip 


### Genome Analysis Toolkit (GATK)
The _Genome Analysis Toolkit_ (_GATK_) is a set of bioinformatic tools for analyzing high-throughput sequencing (HTS) and variant call format (VCF) data.

The toolkit is well established for germline short variant discovery from whole genome and exome sequencing data. GATK4 expands functionality into copy number and somatic analyses and offers pipeline scripts for workflows. Version 4 (GATK4) is open-source.

[Website](https://gatk.broadinstitute.org/hc/en-us)  | [Github](https://github.com/broadinstitute/gatk)