## Squence Data
- 3 major types of data
1. Sequence data - FASTA, FASTQ
2. Alignment data - SAM, BAM
3. Genome feature data - BED, Wiggle, GTF, GFF

#### FASTQ file
- A FASTQ file is a text file that contains the sequence data from the clusters that pass filter on a flow cell.
- FASTQ – FASTA with quality
- Each entry in a FASTQ files consists of 4 lines:
  1. A sequence identifier with information about the sequencing run and the cluster. The exact contents of this line vary by based on the BCL to FASTQ conversion software used.
  2. The sequence (the base calls; A, C, T, G and N).
  3. A separator, which is simply a plus (+) sign.
  4. The base call quality scores. These are Phred +33 encoded, using ASCII characters to represent the numerical quality scores.
- FASTA file extensions: fasta, fa, faa, ffn, fnn, fna (.gz, .bgz, .bze, .xz)
- FASTQ file extensions: fastq, fq (.gz, .bgz, .bz2, .xz)

#### BAM file
- SAM stands for Sequence Alignment/Map format. 
- It is a TAB-delimited text format consisting of a header section, which is optional, and an alignment section.
- Each header line begins with the character ‘@’.
- Each alignment line has 11 mandatory fields.
- BAM is binary compressed version of SAM file.
- CRAM files are smaller by taking advantage of an additional external "reference sequence" file.
- File extensions: .sam, .bam, .cram (.gz, .bgz, .bz2, .xz)

Header (optional)
| Col | Field | Brief description   |
| --- | ----- | ------------------- |
| 1   | @HD   | File-level metadata |
| 2   | @SQ   | Reference sequence dictionary       |
| 3   | @RG   | Read group                    |
| 4   | @PG   | Program                    |
| 5    | @CO      |  One-line text comment                   |

Alignment
| Col | Field | Type   | Brief description                     |
| --- | ----- | ------ | ------------------------------------- |
| 1   | QNAME | String | Query template NAME                   |
| 2   | FLAG  | Int    | bitwise FLAG                          |
| 3   | RNAME | String | Reference sequence NAME               |
| 4   | POS   | Int    | 1-based leftmost mapping POSition     |
| 5   | MAPQ  | Int    | MAPping Quality                       |
| 6   | CIGAR | String | CIGAR string                          |
| 7   | RNEXT | String | Reference name of the mate/next read  |
| 8   | PNEXT | Int    | Position of the mate/next read        |
| 9   | TLEN  | Int    | observed Template LENgth              |
| 10  | SEQ   | String | segment SEQuence                      |
| 11  | QUAL  | String | ASCII of Phred-scaled base QUALity+33 |
Ref: https://samtools.github.io/hts-specs/SAMv1.pdf

#### VCF file
VCF extesions: vcf  (.gz, .bgz, .bz2, .xz)

#### BCF file
BCF extesions: bcf  (.gz, .bgz)

#### GVF file
GVF extesions: gvf  (.gz, .bgz, .bz2, .xz)

## Sequencing Bioinformatics Pipeline
![image](Notes/Attachments/Bioinformatics/DNA-data-pipeline.png)
[[DNA-data-pipeline]]

