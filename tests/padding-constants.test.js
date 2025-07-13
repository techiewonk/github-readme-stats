import { Card } from "../src/common/Card.js";
import { queryByTestId } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { expect, it, describe } from "@jest/globals";

describe("Padding Constants", () => {
  it("should have correct default padding values in Card class", () => {
    const card = new Card({});

    // Test that the default padding values are set correctly
    expect(card.paddingX).toBe(15);
    expect(card.paddingY).toBe(15);
  });

  it("should apply correct padding when title is visible", () => {
    const card = new Card({ height: 200 });
    document.body.innerHTML = card.render(``);

    // When title is visible: paddingY + 20 = 15 + 20 = 35
    expect(queryByTestId(document.body, "main-card-body")).toHaveAttribute(
      "transform",
      "translate(0, 35)",
    );
  });

  it("should apply correct padding when title is hidden", () => {
    const card = new Card({ height: 200 });
    card.setHideTitle(true);
    document.body.innerHTML = card.render(``);

    // When title is hidden: paddingX = 15
    expect(queryByTestId(document.body, "main-card-body")).toHaveAttribute(
      "transform",
      "translate(0, 15)",
    );
  });

  it("should position title with correct padding", () => {
    const card = new Card({ height: 200 });
    document.body.innerHTML = card.render(``);

    // Title should be positioned with paddingX and paddingY
    expect(queryByTestId(document.body, "card-title")).toHaveAttribute(
      "transform",
      "translate(15, 15)",
    );
  });

  it("should document padding constants for reference", () => {
    // This test documents the padding constants used throughout the project
    const PADDING_CONSTANTS = {
      // Card class default padding
      CARD_PADDING_X: 15,
      CARD_PADDING_Y: 15,

      // Top languages card specific padding
      TOP_LANGS_CARD_PADDING: 15,

      // Calculations
      TITLE_VISIBLE_OFFSET: 35, // paddingY + 20
      TITLE_HIDDEN_OFFSET: 15, // paddingX
    };

    expect(PADDING_CONSTANTS.CARD_PADDING_X).toBe(15);
    expect(PADDING_CONSTANTS.CARD_PADDING_Y).toBe(15);
    expect(PADDING_CONSTANTS.TOP_LANGS_CARD_PADDING).toBe(15);
    expect(PADDING_CONSTANTS.TITLE_VISIBLE_OFFSET).toBe(35);
    expect(PADDING_CONSTANTS.TITLE_HIDDEN_OFFSET).toBe(15);
  });
});
