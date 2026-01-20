import { IconButtonComponent } from "@ui/components/ButtonComponent";
import { IconRes } from "@ui/utils/IconRes";
import { ICON } from "@ui/constants/icons";
import { TextRes } from "@ui/utils/TextRes";
import { shiftMonthSafe } from "../utils/date";
import styles from "./TimeframeComponent.module.css";

export function TimeframeComponent({ startDate, onRangeChange, onClick }) {
  const effectiveDate =
    startDate || new Date().toISOString().split("T")[0].substring(0, 8) + "01";

  const [y, m, d] = effectiveDate.split("-").map(Number);
  const startObj = new Date(y, m - 1, d);
  const endObj = new Date(y, m, d - 1);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  };

  return (
    <div className={styles.container}>
      <IconButtonComponent
        icon={<IconRes icon={ICON.BACK} />}
        onClick={() => onRangeChange(shiftMonthSafe(effectiveDate, -1))}
      />

      <div className={styles.label}>
        <TextRes
          text={`${formatDate(startObj)} - ${formatDate(endObj)}`}
          onClick={onClick}
        />
      </div>

      <IconButtonComponent
        icon={<IconRes icon={ICON.NEXT} />}
        onClick={() => onRangeChange(shiftMonthSafe(effectiveDate, 1))}
      />
    </div>
  );
}
