import { Request, Response } from "express";
const {
  ThermalPrinter,
  PrinterTypes,
  CharacterSet,
  BreakLine,
} = require("node-thermal-printer");

export async function PostPrint(req: Request, res: Response) {
  const { order, change } = req.body;
  let printer = new ThermalPrinter({
    type: PrinterTypes.STAR,
    interface: "tcp://xxx.xxx.xxx.xxx",
    characterSet: CharacterSet.PC852_LATIN2,
    removeSpecialCharacters: false,
    lineCharacter: "=",
    breakLine: BreakLine.WORD,
    options: {
      timeout: 5000,
    },
  });

  try {
    const centerText = (text: string, lineLength: number) => {
      const spacesToAdd = Math.floor((lineLength - text.length) / 2);
      const paddedText = " ".repeat(spacesToAdd) + text;
      return paddedText;
    };

    printer.print(centerText("Fast Food XYZ", 40));
    printer.drawLine();

    order.forEach((item) => {      
      item.ProductSpecific.forEach((product) => {
        printer.table([
          centerText(`${item.counter} ${product.name}`, 30),
          `R$${product.price.toFixed(2)}`,
        ]);
      });

      if (item.followUp.length > 0) {
        item.followUp.forEach((followUp) => {
          printer.table([
            centerText(`${followUp.name}`, 30),
            followUp.price.toFixed(2),
          ]);
        });
      }
      printer.drawLine();
      printer.println(`Observações: ${item.observationText}`);
      printer.println(`Código do Pedido: ${item.code}`);
      printer.println(`Total: ${item.total}`);
      printer.println(`Nome do Cliente: ${item.nameClient}`);
    });

    printer.drawLine();
    printer.println(`Troco: R$${change.toFixed(2)}`);
    printer.cut();
    printer.execute();

    res.status(200).send("Impressão bem-sucedida!");
  } catch (error) {
    // colocar o arquivo aqui
    console.error("Erro ao imprimir recibo:", error);
    res.status(500).send("Erro ao imprimir recibo");
  }
}
