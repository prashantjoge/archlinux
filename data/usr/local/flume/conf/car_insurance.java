// ORM class for table 'car_insurance'
// WARNING: This class is AUTO-GENERATED. Modify at your own risk.
//
// Debug information:
// Generated date: Sat Apr 18 17:50:35 IST 2020
// For connector: org.apache.sqoop.manager.MySQLManager
import org.apache.hadoop.io.BytesWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.io.Writable;
import org.apache.hadoop.mapred.lib.db.DBWritable;
import com.cloudera.sqoop.lib.JdbcWritableBridge;
import com.cloudera.sqoop.lib.DelimiterSet;
import com.cloudera.sqoop.lib.FieldFormatter;
import com.cloudera.sqoop.lib.RecordParser;
import com.cloudera.sqoop.lib.BooleanParser;
import com.cloudera.sqoop.lib.BlobRef;
import com.cloudera.sqoop.lib.ClobRef;
import com.cloudera.sqoop.lib.LargeObjectLoader;
import com.cloudera.sqoop.lib.SqoopRecord;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.CharBuffer;
import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

public class car_insurance extends SqoopRecord  implements DBWritable, Writable {
  private final int PROTOCOL_VERSION = 3;
  public int getClassFormatVersion() { return PROTOCOL_VERSION; }
  public static interface FieldSetterCommand {    void setField(Object value);  }  protected ResultSet __cur_result_set;
  private Map<String, FieldSetterCommand> setters = new HashMap<String, FieldSetterCommand>();
  private void init0() {
    setters.put("policyid", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.policyid = (Long)value;
      }
    });
    setters.put("DOB", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.DOB = (String)value;
      }
    });
    setters.put("age", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.age = (Integer)value;
      }
    });
    setters.put("cust_age_category", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.cust_age_category = (String)value;
      }
    });
    setters.put("income", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.income = (Integer)value;
      }
    });
    setters.put("parent1", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.parent1 = (String)value;
      }
    });
    setters.put("home_value", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.home_value = (Integer)value;
      }
    });
    setters.put("married", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.married = (String)value;
      }
    });
    setters.put("gender", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.gender = (String)value;
      }
    });
    setters.put("education", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.education = (String)value;
      }
    });
    setters.put("occupation", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.occupation = (String)value;
      }
    });
    setters.put("travel_time", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.travel_time = (Integer)value;
      }
    });
    setters.put("car_usage", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.car_usage = (String)value;
      }
    });
    setters.put("IDV", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.IDV = (Integer)value;
      }
    });
    setters.put("car_type", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.car_type = (String)value;
      }
    });
    setters.put("red_car", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.red_car = (String)value;
      }
    });
    setters.put("old_claim", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.old_claim = (Integer)value;
      }
    });
    setters.put("claim_freq", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.claim_freq = (Integer)value;
      }
    });
    setters.put("mvr_points", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.mvr_points = (Integer)value;
      }
    });
    setters.put("claim_amount", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.claim_amount = (Integer)value;
      }
    });
    setters.put("car_age", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.car_age = (Integer)value;
      }
    });
    setters.put("car_age_category", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.car_age_category = (String)value;
      }
    });
    setters.put("claim_status", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.claim_status = (Integer)value;
      }
    });
    setters.put("urbanicity", new FieldSetterCommand() {
      @Override
      public void setField(Object value) {
        car_insurance.this.urbanicity = (String)value;
      }
    });
  }
  public car_insurance() {
    init0();
  }
  private Long policyid;
  public Long get_policyid() {
    return policyid;
  }
  public void set_policyid(Long policyid) {
    this.policyid = policyid;
  }
  public car_insurance with_policyid(Long policyid) {
    this.policyid = policyid;
    return this;
  }
  private String DOB;
  public String get_DOB() {
    return DOB;
  }
  public void set_DOB(String DOB) {
    this.DOB = DOB;
  }
  public car_insurance with_DOB(String DOB) {
    this.DOB = DOB;
    return this;
  }
  private Integer age;
  public Integer get_age() {
    return age;
  }
  public void set_age(Integer age) {
    this.age = age;
  }
  public car_insurance with_age(Integer age) {
    this.age = age;
    return this;
  }
  private String cust_age_category;
  public String get_cust_age_category() {
    return cust_age_category;
  }
  public void set_cust_age_category(String cust_age_category) {
    this.cust_age_category = cust_age_category;
  }
  public car_insurance with_cust_age_category(String cust_age_category) {
    this.cust_age_category = cust_age_category;
    return this;
  }
  private Integer income;
  public Integer get_income() {
    return income;
  }
  public void set_income(Integer income) {
    this.income = income;
  }
  public car_insurance with_income(Integer income) {
    this.income = income;
    return this;
  }
  private String parent1;
  public String get_parent1() {
    return parent1;
  }
  public void set_parent1(String parent1) {
    this.parent1 = parent1;
  }
  public car_insurance with_parent1(String parent1) {
    this.parent1 = parent1;
    return this;
  }
  private Integer home_value;
  public Integer get_home_value() {
    return home_value;
  }
  public void set_home_value(Integer home_value) {
    this.home_value = home_value;
  }
  public car_insurance with_home_value(Integer home_value) {
    this.home_value = home_value;
    return this;
  }
  private String married;
  public String get_married() {
    return married;
  }
  public void set_married(String married) {
    this.married = married;
  }
  public car_insurance with_married(String married) {
    this.married = married;
    return this;
  }
  private String gender;
  public String get_gender() {
    return gender;
  }
  public void set_gender(String gender) {
    this.gender = gender;
  }
  public car_insurance with_gender(String gender) {
    this.gender = gender;
    return this;
  }
  private String education;
  public String get_education() {
    return education;
  }
  public void set_education(String education) {
    this.education = education;
  }
  public car_insurance with_education(String education) {
    this.education = education;
    return this;
  }
  private String occupation;
  public String get_occupation() {
    return occupation;
  }
  public void set_occupation(String occupation) {
    this.occupation = occupation;
  }
  public car_insurance with_occupation(String occupation) {
    this.occupation = occupation;
    return this;
  }
  private Integer travel_time;
  public Integer get_travel_time() {
    return travel_time;
  }
  public void set_travel_time(Integer travel_time) {
    this.travel_time = travel_time;
  }
  public car_insurance with_travel_time(Integer travel_time) {
    this.travel_time = travel_time;
    return this;
  }
  private String car_usage;
  public String get_car_usage() {
    return car_usage;
  }
  public void set_car_usage(String car_usage) {
    this.car_usage = car_usage;
  }
  public car_insurance with_car_usage(String car_usage) {
    this.car_usage = car_usage;
    return this;
  }
  private Integer IDV;
  public Integer get_IDV() {
    return IDV;
  }
  public void set_IDV(Integer IDV) {
    this.IDV = IDV;
  }
  public car_insurance with_IDV(Integer IDV) {
    this.IDV = IDV;
    return this;
  }
  private String car_type;
  public String get_car_type() {
    return car_type;
  }
  public void set_car_type(String car_type) {
    this.car_type = car_type;
  }
  public car_insurance with_car_type(String car_type) {
    this.car_type = car_type;
    return this;
  }
  private String red_car;
  public String get_red_car() {
    return red_car;
  }
  public void set_red_car(String red_car) {
    this.red_car = red_car;
  }
  public car_insurance with_red_car(String red_car) {
    this.red_car = red_car;
    return this;
  }
  private Integer old_claim;
  public Integer get_old_claim() {
    return old_claim;
  }
  public void set_old_claim(Integer old_claim) {
    this.old_claim = old_claim;
  }
  public car_insurance with_old_claim(Integer old_claim) {
    this.old_claim = old_claim;
    return this;
  }
  private Integer claim_freq;
  public Integer get_claim_freq() {
    return claim_freq;
  }
  public void set_claim_freq(Integer claim_freq) {
    this.claim_freq = claim_freq;
  }
  public car_insurance with_claim_freq(Integer claim_freq) {
    this.claim_freq = claim_freq;
    return this;
  }
  private Integer mvr_points;
  public Integer get_mvr_points() {
    return mvr_points;
  }
  public void set_mvr_points(Integer mvr_points) {
    this.mvr_points = mvr_points;
  }
  public car_insurance with_mvr_points(Integer mvr_points) {
    this.mvr_points = mvr_points;
    return this;
  }
  private Integer claim_amount;
  public Integer get_claim_amount() {
    return claim_amount;
  }
  public void set_claim_amount(Integer claim_amount) {
    this.claim_amount = claim_amount;
  }
  public car_insurance with_claim_amount(Integer claim_amount) {
    this.claim_amount = claim_amount;
    return this;
  }
  private Integer car_age;
  public Integer get_car_age() {
    return car_age;
  }
  public void set_car_age(Integer car_age) {
    this.car_age = car_age;
  }
  public car_insurance with_car_age(Integer car_age) {
    this.car_age = car_age;
    return this;
  }
  private String car_age_category;
  public String get_car_age_category() {
    return car_age_category;
  }
  public void set_car_age_category(String car_age_category) {
    this.car_age_category = car_age_category;
  }
  public car_insurance with_car_age_category(String car_age_category) {
    this.car_age_category = car_age_category;
    return this;
  }
  private Integer claim_status;
  public Integer get_claim_status() {
    return claim_status;
  }
  public void set_claim_status(Integer claim_status) {
    this.claim_status = claim_status;
  }
  public car_insurance with_claim_status(Integer claim_status) {
    this.claim_status = claim_status;
    return this;
  }
  private String urbanicity;
  public String get_urbanicity() {
    return urbanicity;
  }
  public void set_urbanicity(String urbanicity) {
    this.urbanicity = urbanicity;
  }
  public car_insurance with_urbanicity(String urbanicity) {
    this.urbanicity = urbanicity;
    return this;
  }
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (!(o instanceof car_insurance)) {
      return false;
    }
    car_insurance that = (car_insurance) o;
    boolean equal = true;
    equal = equal && (this.policyid == null ? that.policyid == null : this.policyid.equals(that.policyid));
    equal = equal && (this.DOB == null ? that.DOB == null : this.DOB.equals(that.DOB));
    equal = equal && (this.age == null ? that.age == null : this.age.equals(that.age));
    equal = equal && (this.cust_age_category == null ? that.cust_age_category == null : this.cust_age_category.equals(that.cust_age_category));
    equal = equal && (this.income == null ? that.income == null : this.income.equals(that.income));
    equal = equal && (this.parent1 == null ? that.parent1 == null : this.parent1.equals(that.parent1));
    equal = equal && (this.home_value == null ? that.home_value == null : this.home_value.equals(that.home_value));
    equal = equal && (this.married == null ? that.married == null : this.married.equals(that.married));
    equal = equal && (this.gender == null ? that.gender == null : this.gender.equals(that.gender));
    equal = equal && (this.education == null ? that.education == null : this.education.equals(that.education));
    equal = equal && (this.occupation == null ? that.occupation == null : this.occupation.equals(that.occupation));
    equal = equal && (this.travel_time == null ? that.travel_time == null : this.travel_time.equals(that.travel_time));
    equal = equal && (this.car_usage == null ? that.car_usage == null : this.car_usage.equals(that.car_usage));
    equal = equal && (this.IDV == null ? that.IDV == null : this.IDV.equals(that.IDV));
    equal = equal && (this.car_type == null ? that.car_type == null : this.car_type.equals(that.car_type));
    equal = equal && (this.red_car == null ? that.red_car == null : this.red_car.equals(that.red_car));
    equal = equal && (this.old_claim == null ? that.old_claim == null : this.old_claim.equals(that.old_claim));
    equal = equal && (this.claim_freq == null ? that.claim_freq == null : this.claim_freq.equals(that.claim_freq));
    equal = equal && (this.mvr_points == null ? that.mvr_points == null : this.mvr_points.equals(that.mvr_points));
    equal = equal && (this.claim_amount == null ? that.claim_amount == null : this.claim_amount.equals(that.claim_amount));
    equal = equal && (this.car_age == null ? that.car_age == null : this.car_age.equals(that.car_age));
    equal = equal && (this.car_age_category == null ? that.car_age_category == null : this.car_age_category.equals(that.car_age_category));
    equal = equal && (this.claim_status == null ? that.claim_status == null : this.claim_status.equals(that.claim_status));
    equal = equal && (this.urbanicity == null ? that.urbanicity == null : this.urbanicity.equals(that.urbanicity));
    return equal;
  }
  public boolean equals0(Object o) {
    if (this == o) {
      return true;
    }
    if (!(o instanceof car_insurance)) {
      return false;
    }
    car_insurance that = (car_insurance) o;
    boolean equal = true;
    equal = equal && (this.policyid == null ? that.policyid == null : this.policyid.equals(that.policyid));
    equal = equal && (this.DOB == null ? that.DOB == null : this.DOB.equals(that.DOB));
    equal = equal && (this.age == null ? that.age == null : this.age.equals(that.age));
    equal = equal && (this.cust_age_category == null ? that.cust_age_category == null : this.cust_age_category.equals(that.cust_age_category));
    equal = equal && (this.income == null ? that.income == null : this.income.equals(that.income));
    equal = equal && (this.parent1 == null ? that.parent1 == null : this.parent1.equals(that.parent1));
    equal = equal && (this.home_value == null ? that.home_value == null : this.home_value.equals(that.home_value));
    equal = equal && (this.married == null ? that.married == null : this.married.equals(that.married));
    equal = equal && (this.gender == null ? that.gender == null : this.gender.equals(that.gender));
    equal = equal && (this.education == null ? that.education == null : this.education.equals(that.education));
    equal = equal && (this.occupation == null ? that.occupation == null : this.occupation.equals(that.occupation));
    equal = equal && (this.travel_time == null ? that.travel_time == null : this.travel_time.equals(that.travel_time));
    equal = equal && (this.car_usage == null ? that.car_usage == null : this.car_usage.equals(that.car_usage));
    equal = equal && (this.IDV == null ? that.IDV == null : this.IDV.equals(that.IDV));
    equal = equal && (this.car_type == null ? that.car_type == null : this.car_type.equals(that.car_type));
    equal = equal && (this.red_car == null ? that.red_car == null : this.red_car.equals(that.red_car));
    equal = equal && (this.old_claim == null ? that.old_claim == null : this.old_claim.equals(that.old_claim));
    equal = equal && (this.claim_freq == null ? that.claim_freq == null : this.claim_freq.equals(that.claim_freq));
    equal = equal && (this.mvr_points == null ? that.mvr_points == null : this.mvr_points.equals(that.mvr_points));
    equal = equal && (this.claim_amount == null ? that.claim_amount == null : this.claim_amount.equals(that.claim_amount));
    equal = equal && (this.car_age == null ? that.car_age == null : this.car_age.equals(that.car_age));
    equal = equal && (this.car_age_category == null ? that.car_age_category == null : this.car_age_category.equals(that.car_age_category));
    equal = equal && (this.claim_status == null ? that.claim_status == null : this.claim_status.equals(that.claim_status));
    equal = equal && (this.urbanicity == null ? that.urbanicity == null : this.urbanicity.equals(that.urbanicity));
    return equal;
  }
  public void readFields(ResultSet __dbResults) throws SQLException {
    this.__cur_result_set = __dbResults;
    this.policyid = JdbcWritableBridge.readLong(1, __dbResults);
    this.DOB = JdbcWritableBridge.readString(2, __dbResults);
    this.age = JdbcWritableBridge.readInteger(3, __dbResults);
    this.cust_age_category = JdbcWritableBridge.readString(4, __dbResults);
    this.income = JdbcWritableBridge.readInteger(5, __dbResults);
    this.parent1 = JdbcWritableBridge.readString(6, __dbResults);
    this.home_value = JdbcWritableBridge.readInteger(7, __dbResults);
    this.married = JdbcWritableBridge.readString(8, __dbResults);
    this.gender = JdbcWritableBridge.readString(9, __dbResults);
    this.education = JdbcWritableBridge.readString(10, __dbResults);
    this.occupation = JdbcWritableBridge.readString(11, __dbResults);
    this.travel_time = JdbcWritableBridge.readInteger(12, __dbResults);
    this.car_usage = JdbcWritableBridge.readString(13, __dbResults);
    this.IDV = JdbcWritableBridge.readInteger(14, __dbResults);
    this.car_type = JdbcWritableBridge.readString(15, __dbResults);
    this.red_car = JdbcWritableBridge.readString(16, __dbResults);
    this.old_claim = JdbcWritableBridge.readInteger(17, __dbResults);
    this.claim_freq = JdbcWritableBridge.readInteger(18, __dbResults);
    this.mvr_points = JdbcWritableBridge.readInteger(19, __dbResults);
    this.claim_amount = JdbcWritableBridge.readInteger(20, __dbResults);
    this.car_age = JdbcWritableBridge.readInteger(21, __dbResults);
    this.car_age_category = JdbcWritableBridge.readString(22, __dbResults);
    this.claim_status = JdbcWritableBridge.readInteger(23, __dbResults);
    this.urbanicity = JdbcWritableBridge.readString(24, __dbResults);
  }
  public void readFields0(ResultSet __dbResults) throws SQLException {
    this.policyid = JdbcWritableBridge.readLong(1, __dbResults);
    this.DOB = JdbcWritableBridge.readString(2, __dbResults);
    this.age = JdbcWritableBridge.readInteger(3, __dbResults);
    this.cust_age_category = JdbcWritableBridge.readString(4, __dbResults);
    this.income = JdbcWritableBridge.readInteger(5, __dbResults);
    this.parent1 = JdbcWritableBridge.readString(6, __dbResults);
    this.home_value = JdbcWritableBridge.readInteger(7, __dbResults);
    this.married = JdbcWritableBridge.readString(8, __dbResults);
    this.gender = JdbcWritableBridge.readString(9, __dbResults);
    this.education = JdbcWritableBridge.readString(10, __dbResults);
    this.occupation = JdbcWritableBridge.readString(11, __dbResults);
    this.travel_time = JdbcWritableBridge.readInteger(12, __dbResults);
    this.car_usage = JdbcWritableBridge.readString(13, __dbResults);
    this.IDV = JdbcWritableBridge.readInteger(14, __dbResults);
    this.car_type = JdbcWritableBridge.readString(15, __dbResults);
    this.red_car = JdbcWritableBridge.readString(16, __dbResults);
    this.old_claim = JdbcWritableBridge.readInteger(17, __dbResults);
    this.claim_freq = JdbcWritableBridge.readInteger(18, __dbResults);
    this.mvr_points = JdbcWritableBridge.readInteger(19, __dbResults);
    this.claim_amount = JdbcWritableBridge.readInteger(20, __dbResults);
    this.car_age = JdbcWritableBridge.readInteger(21, __dbResults);
    this.car_age_category = JdbcWritableBridge.readString(22, __dbResults);
    this.claim_status = JdbcWritableBridge.readInteger(23, __dbResults);
    this.urbanicity = JdbcWritableBridge.readString(24, __dbResults);
  }
  public void loadLargeObjects(LargeObjectLoader __loader)
      throws SQLException, IOException, InterruptedException {
  }
  public void loadLargeObjects0(LargeObjectLoader __loader)
      throws SQLException, IOException, InterruptedException {
  }
  public void write(PreparedStatement __dbStmt) throws SQLException {
    write(__dbStmt, 0);
  }

  public int write(PreparedStatement __dbStmt, int __off) throws SQLException {
    JdbcWritableBridge.writeLong(policyid, 1 + __off, -5, __dbStmt);
    JdbcWritableBridge.writeString(DOB, 2 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeInteger(age, 3 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeString(cust_age_category, 4 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeInteger(income, 5 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeString(parent1, 6 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeInteger(home_value, 7 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeString(married, 8 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeString(gender, 9 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeString(education, 10 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeString(occupation, 11 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeInteger(travel_time, 12 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeString(car_usage, 13 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeInteger(IDV, 14 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeString(car_type, 15 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeString(red_car, 16 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeInteger(old_claim, 17 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeInteger(claim_freq, 18 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeInteger(mvr_points, 19 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeInteger(claim_amount, 20 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeInteger(car_age, 21 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeString(car_age_category, 22 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeInteger(claim_status, 23 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeString(urbanicity, 24 + __off, 12, __dbStmt);
    return 24;
  }
  public void write0(PreparedStatement __dbStmt, int __off) throws SQLException {
    JdbcWritableBridge.writeLong(policyid, 1 + __off, -5, __dbStmt);
    JdbcWritableBridge.writeString(DOB, 2 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeInteger(age, 3 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeString(cust_age_category, 4 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeInteger(income, 5 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeString(parent1, 6 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeInteger(home_value, 7 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeString(married, 8 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeString(gender, 9 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeString(education, 10 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeString(occupation, 11 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeInteger(travel_time, 12 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeString(car_usage, 13 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeInteger(IDV, 14 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeString(car_type, 15 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeString(red_car, 16 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeInteger(old_claim, 17 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeInteger(claim_freq, 18 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeInteger(mvr_points, 19 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeInteger(claim_amount, 20 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeInteger(car_age, 21 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeString(car_age_category, 22 + __off, 12, __dbStmt);
    JdbcWritableBridge.writeInteger(claim_status, 23 + __off, 4, __dbStmt);
    JdbcWritableBridge.writeString(urbanicity, 24 + __off, 12, __dbStmt);
  }
  public void readFields(DataInput __dataIn) throws IOException {
this.readFields0(__dataIn);  }
  public void readFields0(DataInput __dataIn) throws IOException {
    if (__dataIn.readBoolean()) { 
        this.policyid = null;
    } else {
    this.policyid = Long.valueOf(__dataIn.readLong());
    }
    if (__dataIn.readBoolean()) { 
        this.DOB = null;
    } else {
    this.DOB = Text.readString(__dataIn);
    }
    if (__dataIn.readBoolean()) { 
        this.age = null;
    } else {
    this.age = Integer.valueOf(__dataIn.readInt());
    }
    if (__dataIn.readBoolean()) { 
        this.cust_age_category = null;
    } else {
    this.cust_age_category = Text.readString(__dataIn);
    }
    if (__dataIn.readBoolean()) { 
        this.income = null;
    } else {
    this.income = Integer.valueOf(__dataIn.readInt());
    }
    if (__dataIn.readBoolean()) { 
        this.parent1 = null;
    } else {
    this.parent1 = Text.readString(__dataIn);
    }
    if (__dataIn.readBoolean()) { 
        this.home_value = null;
    } else {
    this.home_value = Integer.valueOf(__dataIn.readInt());
    }
    if (__dataIn.readBoolean()) { 
        this.married = null;
    } else {
    this.married = Text.readString(__dataIn);
    }
    if (__dataIn.readBoolean()) { 
        this.gender = null;
    } else {
    this.gender = Text.readString(__dataIn);
    }
    if (__dataIn.readBoolean()) { 
        this.education = null;
    } else {
    this.education = Text.readString(__dataIn);
    }
    if (__dataIn.readBoolean()) { 
        this.occupation = null;
    } else {
    this.occupation = Text.readString(__dataIn);
    }
    if (__dataIn.readBoolean()) { 
        this.travel_time = null;
    } else {
    this.travel_time = Integer.valueOf(__dataIn.readInt());
    }
    if (__dataIn.readBoolean()) { 
        this.car_usage = null;
    } else {
    this.car_usage = Text.readString(__dataIn);
    }
    if (__dataIn.readBoolean()) { 
        this.IDV = null;
    } else {
    this.IDV = Integer.valueOf(__dataIn.readInt());
    }
    if (__dataIn.readBoolean()) { 
        this.car_type = null;
    } else {
    this.car_type = Text.readString(__dataIn);
    }
    if (__dataIn.readBoolean()) { 
        this.red_car = null;
    } else {
    this.red_car = Text.readString(__dataIn);
    }
    if (__dataIn.readBoolean()) { 
        this.old_claim = null;
    } else {
    this.old_claim = Integer.valueOf(__dataIn.readInt());
    }
    if (__dataIn.readBoolean()) { 
        this.claim_freq = null;
    } else {
    this.claim_freq = Integer.valueOf(__dataIn.readInt());
    }
    if (__dataIn.readBoolean()) { 
        this.mvr_points = null;
    } else {
    this.mvr_points = Integer.valueOf(__dataIn.readInt());
    }
    if (__dataIn.readBoolean()) { 
        this.claim_amount = null;
    } else {
    this.claim_amount = Integer.valueOf(__dataIn.readInt());
    }
    if (__dataIn.readBoolean()) { 
        this.car_age = null;
    } else {
    this.car_age = Integer.valueOf(__dataIn.readInt());
    }
    if (__dataIn.readBoolean()) { 
        this.car_age_category = null;
    } else {
    this.car_age_category = Text.readString(__dataIn);
    }
    if (__dataIn.readBoolean()) { 
        this.claim_status = null;
    } else {
    this.claim_status = Integer.valueOf(__dataIn.readInt());
    }
    if (__dataIn.readBoolean()) { 
        this.urbanicity = null;
    } else {
    this.urbanicity = Text.readString(__dataIn);
    }
  }
  public void write(DataOutput __dataOut) throws IOException {
    if (null == this.policyid) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeLong(this.policyid);
    }
    if (null == this.DOB) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, DOB);
    }
    if (null == this.age) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.age);
    }
    if (null == this.cust_age_category) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, cust_age_category);
    }
    if (null == this.income) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.income);
    }
    if (null == this.parent1) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, parent1);
    }
    if (null == this.home_value) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.home_value);
    }
    if (null == this.married) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, married);
    }
    if (null == this.gender) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, gender);
    }
    if (null == this.education) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, education);
    }
    if (null == this.occupation) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, occupation);
    }
    if (null == this.travel_time) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.travel_time);
    }
    if (null == this.car_usage) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, car_usage);
    }
    if (null == this.IDV) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.IDV);
    }
    if (null == this.car_type) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, car_type);
    }
    if (null == this.red_car) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, red_car);
    }
    if (null == this.old_claim) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.old_claim);
    }
    if (null == this.claim_freq) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.claim_freq);
    }
    if (null == this.mvr_points) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.mvr_points);
    }
    if (null == this.claim_amount) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.claim_amount);
    }
    if (null == this.car_age) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.car_age);
    }
    if (null == this.car_age_category) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, car_age_category);
    }
    if (null == this.claim_status) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.claim_status);
    }
    if (null == this.urbanicity) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, urbanicity);
    }
  }
  public void write0(DataOutput __dataOut) throws IOException {
    if (null == this.policyid) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeLong(this.policyid);
    }
    if (null == this.DOB) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, DOB);
    }
    if (null == this.age) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.age);
    }
    if (null == this.cust_age_category) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, cust_age_category);
    }
    if (null == this.income) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.income);
    }
    if (null == this.parent1) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, parent1);
    }
    if (null == this.home_value) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.home_value);
    }
    if (null == this.married) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, married);
    }
    if (null == this.gender) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, gender);
    }
    if (null == this.education) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, education);
    }
    if (null == this.occupation) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, occupation);
    }
    if (null == this.travel_time) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.travel_time);
    }
    if (null == this.car_usage) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, car_usage);
    }
    if (null == this.IDV) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.IDV);
    }
    if (null == this.car_type) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, car_type);
    }
    if (null == this.red_car) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, red_car);
    }
    if (null == this.old_claim) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.old_claim);
    }
    if (null == this.claim_freq) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.claim_freq);
    }
    if (null == this.mvr_points) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.mvr_points);
    }
    if (null == this.claim_amount) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.claim_amount);
    }
    if (null == this.car_age) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.car_age);
    }
    if (null == this.car_age_category) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, car_age_category);
    }
    if (null == this.claim_status) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    __dataOut.writeInt(this.claim_status);
    }
    if (null == this.urbanicity) { 
        __dataOut.writeBoolean(true);
    } else {
        __dataOut.writeBoolean(false);
    Text.writeString(__dataOut, urbanicity);
    }
  }
  private static final DelimiterSet __outputDelimiters = new DelimiterSet((char) 44, (char) 10, (char) 0, (char) 0, false);
  public String toString() {
    return toString(__outputDelimiters, true);
  }
  public String toString(DelimiterSet delimiters) {
    return toString(delimiters, true);
  }
  public String toString(boolean useRecordDelim) {
    return toString(__outputDelimiters, useRecordDelim);
  }
  public String toString(DelimiterSet delimiters, boolean useRecordDelim) {
    StringBuilder __sb = new StringBuilder();
    char fieldDelim = delimiters.getFieldsTerminatedBy();
    __sb.append(FieldFormatter.escapeAndEnclose(policyid==null?"null":"" + policyid, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(DOB==null?"null":DOB, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(age==null?"null":"" + age, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(cust_age_category==null?"null":cust_age_category, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(income==null?"null":"" + income, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(parent1==null?"null":parent1, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(home_value==null?"null":"" + home_value, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(married==null?"null":married, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(gender==null?"null":gender, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(education==null?"null":education, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(occupation==null?"null":occupation, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(travel_time==null?"null":"" + travel_time, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(car_usage==null?"null":car_usage, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(IDV==null?"null":"" + IDV, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(car_type==null?"null":car_type, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(red_car==null?"null":red_car, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(old_claim==null?"null":"" + old_claim, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(claim_freq==null?"null":"" + claim_freq, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(mvr_points==null?"null":"" + mvr_points, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(claim_amount==null?"null":"" + claim_amount, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(car_age==null?"null":"" + car_age, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(car_age_category==null?"null":car_age_category, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(claim_status==null?"null":"" + claim_status, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(urbanicity==null?"null":urbanicity, delimiters));
    if (useRecordDelim) {
      __sb.append(delimiters.getLinesTerminatedBy());
    }
    return __sb.toString();
  }
  public void toString0(DelimiterSet delimiters, StringBuilder __sb, char fieldDelim) {
    __sb.append(FieldFormatter.escapeAndEnclose(policyid==null?"null":"" + policyid, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(DOB==null?"null":DOB, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(age==null?"null":"" + age, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(cust_age_category==null?"null":cust_age_category, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(income==null?"null":"" + income, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(parent1==null?"null":parent1, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(home_value==null?"null":"" + home_value, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(married==null?"null":married, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(gender==null?"null":gender, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(education==null?"null":education, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(occupation==null?"null":occupation, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(travel_time==null?"null":"" + travel_time, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(car_usage==null?"null":car_usage, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(IDV==null?"null":"" + IDV, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(car_type==null?"null":car_type, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(red_car==null?"null":red_car, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(old_claim==null?"null":"" + old_claim, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(claim_freq==null?"null":"" + claim_freq, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(mvr_points==null?"null":"" + mvr_points, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(claim_amount==null?"null":"" + claim_amount, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(car_age==null?"null":"" + car_age, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(car_age_category==null?"null":car_age_category, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(claim_status==null?"null":"" + claim_status, delimiters));
    __sb.append(fieldDelim);
    __sb.append(FieldFormatter.escapeAndEnclose(urbanicity==null?"null":urbanicity, delimiters));
  }
  private static final DelimiterSet __inputDelimiters = new DelimiterSet((char) 44, (char) 10, (char) 0, (char) 0, false);
  private RecordParser __parser;
  public void parse(Text __record) throws RecordParser.ParseError {
    if (null == this.__parser) {
      this.__parser = new RecordParser(__inputDelimiters);
    }
    List<String> __fields = this.__parser.parseRecord(__record);
    __loadFromFields(__fields);
  }

  public void parse(CharSequence __record) throws RecordParser.ParseError {
    if (null == this.__parser) {
      this.__parser = new RecordParser(__inputDelimiters);
    }
    List<String> __fields = this.__parser.parseRecord(__record);
    __loadFromFields(__fields);
  }

  public void parse(byte [] __record) throws RecordParser.ParseError {
    if (null == this.__parser) {
      this.__parser = new RecordParser(__inputDelimiters);
    }
    List<String> __fields = this.__parser.parseRecord(__record);
    __loadFromFields(__fields);
  }

  public void parse(char [] __record) throws RecordParser.ParseError {
    if (null == this.__parser) {
      this.__parser = new RecordParser(__inputDelimiters);
    }
    List<String> __fields = this.__parser.parseRecord(__record);
    __loadFromFields(__fields);
  }

  public void parse(ByteBuffer __record) throws RecordParser.ParseError {
    if (null == this.__parser) {
      this.__parser = new RecordParser(__inputDelimiters);
    }
    List<String> __fields = this.__parser.parseRecord(__record);
    __loadFromFields(__fields);
  }

  public void parse(CharBuffer __record) throws RecordParser.ParseError {
    if (null == this.__parser) {
      this.__parser = new RecordParser(__inputDelimiters);
    }
    List<String> __fields = this.__parser.parseRecord(__record);
    __loadFromFields(__fields);
  }

  private void __loadFromFields(List<String> fields) {
    Iterator<String> __it = fields.listIterator();
    String __cur_str = null;
    try {
    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.policyid = null; } else {
      this.policyid = Long.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.DOB = null; } else {
      this.DOB = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.age = null; } else {
      this.age = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.cust_age_category = null; } else {
      this.cust_age_category = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.income = null; } else {
      this.income = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.parent1 = null; } else {
      this.parent1 = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.home_value = null; } else {
      this.home_value = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.married = null; } else {
      this.married = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.gender = null; } else {
      this.gender = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.education = null; } else {
      this.education = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.occupation = null; } else {
      this.occupation = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.travel_time = null; } else {
      this.travel_time = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.car_usage = null; } else {
      this.car_usage = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.IDV = null; } else {
      this.IDV = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.car_type = null; } else {
      this.car_type = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.red_car = null; } else {
      this.red_car = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.old_claim = null; } else {
      this.old_claim = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.claim_freq = null; } else {
      this.claim_freq = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.mvr_points = null; } else {
      this.mvr_points = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.claim_amount = null; } else {
      this.claim_amount = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.car_age = null; } else {
      this.car_age = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.car_age_category = null; } else {
      this.car_age_category = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.claim_status = null; } else {
      this.claim_status = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.urbanicity = null; } else {
      this.urbanicity = __cur_str;
    }

    } catch (RuntimeException e) {    throw new RuntimeException("Can't parse input data: '" + __cur_str + "'", e);    }  }

  private void __loadFromFields0(Iterator<String> __it) {
    String __cur_str = null;
    try {
    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.policyid = null; } else {
      this.policyid = Long.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.DOB = null; } else {
      this.DOB = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.age = null; } else {
      this.age = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.cust_age_category = null; } else {
      this.cust_age_category = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.income = null; } else {
      this.income = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.parent1 = null; } else {
      this.parent1 = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.home_value = null; } else {
      this.home_value = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.married = null; } else {
      this.married = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.gender = null; } else {
      this.gender = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.education = null; } else {
      this.education = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.occupation = null; } else {
      this.occupation = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.travel_time = null; } else {
      this.travel_time = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.car_usage = null; } else {
      this.car_usage = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.IDV = null; } else {
      this.IDV = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.car_type = null; } else {
      this.car_type = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.red_car = null; } else {
      this.red_car = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.old_claim = null; } else {
      this.old_claim = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.claim_freq = null; } else {
      this.claim_freq = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.mvr_points = null; } else {
      this.mvr_points = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.claim_amount = null; } else {
      this.claim_amount = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.car_age = null; } else {
      this.car_age = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.car_age_category = null; } else {
      this.car_age_category = __cur_str;
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null") || __cur_str.length() == 0) { this.claim_status = null; } else {
      this.claim_status = Integer.valueOf(__cur_str);
    }

    if (__it.hasNext()) {
        __cur_str = __it.next();
    } else {
        __cur_str = "null";
    }
    if (__cur_str.equals("null")) { this.urbanicity = null; } else {
      this.urbanicity = __cur_str;
    }

    } catch (RuntimeException e) {    throw new RuntimeException("Can't parse input data: '" + __cur_str + "'", e);    }  }

  public Object clone() throws CloneNotSupportedException {
    car_insurance o = (car_insurance) super.clone();
    return o;
  }

  public void clone0(car_insurance o) throws CloneNotSupportedException {
  }

  public Map<String, Object> getFieldMap() {
    Map<String, Object> __sqoop$field_map = new HashMap<String, Object>();
    __sqoop$field_map.put("policyid", this.policyid);
    __sqoop$field_map.put("DOB", this.DOB);
    __sqoop$field_map.put("age", this.age);
    __sqoop$field_map.put("cust_age_category", this.cust_age_category);
    __sqoop$field_map.put("income", this.income);
    __sqoop$field_map.put("parent1", this.parent1);
    __sqoop$field_map.put("home_value", this.home_value);
    __sqoop$field_map.put("married", this.married);
    __sqoop$field_map.put("gender", this.gender);
    __sqoop$field_map.put("education", this.education);
    __sqoop$field_map.put("occupation", this.occupation);
    __sqoop$field_map.put("travel_time", this.travel_time);
    __sqoop$field_map.put("car_usage", this.car_usage);
    __sqoop$field_map.put("IDV", this.IDV);
    __sqoop$field_map.put("car_type", this.car_type);
    __sqoop$field_map.put("red_car", this.red_car);
    __sqoop$field_map.put("old_claim", this.old_claim);
    __sqoop$field_map.put("claim_freq", this.claim_freq);
    __sqoop$field_map.put("mvr_points", this.mvr_points);
    __sqoop$field_map.put("claim_amount", this.claim_amount);
    __sqoop$field_map.put("car_age", this.car_age);
    __sqoop$field_map.put("car_age_category", this.car_age_category);
    __sqoop$field_map.put("claim_status", this.claim_status);
    __sqoop$field_map.put("urbanicity", this.urbanicity);
    return __sqoop$field_map;
  }

  public void getFieldMap0(Map<String, Object> __sqoop$field_map) {
    __sqoop$field_map.put("policyid", this.policyid);
    __sqoop$field_map.put("DOB", this.DOB);
    __sqoop$field_map.put("age", this.age);
    __sqoop$field_map.put("cust_age_category", this.cust_age_category);
    __sqoop$field_map.put("income", this.income);
    __sqoop$field_map.put("parent1", this.parent1);
    __sqoop$field_map.put("home_value", this.home_value);
    __sqoop$field_map.put("married", this.married);
    __sqoop$field_map.put("gender", this.gender);
    __sqoop$field_map.put("education", this.education);
    __sqoop$field_map.put("occupation", this.occupation);
    __sqoop$field_map.put("travel_time", this.travel_time);
    __sqoop$field_map.put("car_usage", this.car_usage);
    __sqoop$field_map.put("IDV", this.IDV);
    __sqoop$field_map.put("car_type", this.car_type);
    __sqoop$field_map.put("red_car", this.red_car);
    __sqoop$field_map.put("old_claim", this.old_claim);
    __sqoop$field_map.put("claim_freq", this.claim_freq);
    __sqoop$field_map.put("mvr_points", this.mvr_points);
    __sqoop$field_map.put("claim_amount", this.claim_amount);
    __sqoop$field_map.put("car_age", this.car_age);
    __sqoop$field_map.put("car_age_category", this.car_age_category);
    __sqoop$field_map.put("claim_status", this.claim_status);
    __sqoop$field_map.put("urbanicity", this.urbanicity);
  }

  public void setField(String __fieldName, Object __fieldVal) {
    if (!setters.containsKey(__fieldName)) {
      throw new RuntimeException("No such field:"+__fieldName);
    }
    setters.get(__fieldName).setField(__fieldVal);
  }

}
