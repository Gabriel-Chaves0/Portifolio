from fpdf import FPDF

# Função para calcular a altura necessária para o multi_cell
def calculate_cell_height(text, col_width):
    lines = pdf.multi_cell(col_width, 10, text, border=0, split_only=True)
    return len(lines) * 10  # Multiplicando pelo valor da altura da linha (10)

# Criando um PDF para a tabela detalhada
pdf = FPDF()
pdf.add_page()

# Configurando o título
pdf.set_font('Arial', 'B', 16)
pdf.cell(200, 10, 'Resumo dos Antipsicóticos e Seus Efeitos Colaterais', ln=True, align='C')

# Adicionando espaçamento
pdf.ln(8)

# Configurando o corpo do texto
pdf.set_font('Arial', '', 11)

# Dados da tabela
data = [
    ("Efeito Colateral", "Descrição Detalhada"),
    ("Síndrome Extrapiramidal (SEP)", "Parkinsonismo (rigidez muscular, tremores), distonia aguda (contrações musculares dolorosas), acatisia (inquietação)."),
    ("Distúrbio de Movimento Crônico", "Movimentos involuntários repetitivos, especialmente na musculatura orofacial (ex. protrusão da língua). Difícil de tratar."),
    ("Síndrome Neuroléptica Maligna (SNM)", "Rigidez muscular, febre alta, confusão mental, disautonomia e rabdomiólise. Condição grave e potencialmente fatal."),
    ("Ganho de Peso e Síndrome Metabólica", "Aumento rápido de peso, dislipidemia, resistência à insulina, aumento da circunferência abdominal, risco cardiovascular aumentado."),
    ("Prolongamento do Intervalo QTc", "Alargamento do intervalo QT, predisposição a arritmias ventriculares fatais, especialmente quando combinado com desequilíbrios eletrolíticos."),
    ("Hiperprolactinemia", "Aumento da prolactina sérica, resultando em galactorreia, amenorreia, ginecomastia, osteoporose."),
    ("Neutropenia e Agranulocitose", "Redução de neutrófilos (neutropenia) ou ausência quase total de leucócitos (agranulocitose), alto risco de infecções fatais."),
    ("Cardite e Serosites", "Inflamação do pericárdio (pericardite) ou pleura (pleurite), associada ao uso de clozapina, requer monitoramento regular."),
    ("Outros Efeitos Colaterais", "Tremores, hipotensão ortostática, boca seca, taquicardia, constipação.")
]

# Ajuste de largura das colunas
col_width_1 = 50  # Largura da primeira coluna (efeito colateral)
col_width_2 = 130  # Largura da segunda coluna (descrição detalhada)
row_height = 8

# Inserindo os dados no PDF
for row in data:
    # Calcular a altura necessária para cada célula
    col1_height = calculate_cell_height(row[0], col_width_1)
    col2_height = calculate_cell_height(row[1], col_width_2)
    
    # Usar a maior altura entre as colunas para manter as linhas alinhadas
    max_height = max(col1_height, col2_height)
    
    # Guardar a posição atual
    x, y = pdf.get_x(), pdf.get_y()
    
    # Primeira coluna (Efeito Colateral)
    pdf.multi_cell(col_width_1, row_height, row[0], border=1)
    pdf.set_xy(x + col_width_1, y)  # Retornar para a posição inicial da linha
    
    # Segunda coluna (Descrição Detalhada)
    pdf.multi_cell(col_width_2, row_height, row[1], border=1)
    
    # Mover para a próxima linha
    pdf.ln(1)

# Salvando o PDF
pdf_output_path = "C:\\Users\\bielc\\OneDrive\\Imagens\\Capturas de tela\\resumo_antipsicoticos_efeitos_colaterais.pdf"
pdf.output(pdf_output_path)

print(f"PDF gerado com sucesso: {pdf_output_path}")
